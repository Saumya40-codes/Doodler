import React, { useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { Textarea } from '@chakra-ui/react';
import styles from './chat.module.css';
import { ArrowRightIcon } from '@chakra-ui/icons';
import socket from '@/utils/socket';

interface ChatProps{
  roomId: string,
  username:string | null
}

interface messageProps{
  message: string | null, 
  roomId: string | null, 
  username: string | null
}

const Chat = ({ roomId,username }: ChatProps) => {
  const [messages, setMessages] = useState<string[]>(['Welcome to Doodler!']);
  const [message, setMessage] = useState('');
  const [newUser, setNewUser] = useState<string | null>(null);
  const [leftUser, setLeftUser] = useState<string | null>(null);
  const [receivedMessage, setReceivedMessage] = useState<messageProps>({
    message: null,
    roomId: null,
    username: null,
  });

  const getNewUser = useCallback((newname:string|null) => {
    if(newname){
      setMessages((prevMessages) => {
        let str_to_add = `${newname} joined the room`;
        return [...prevMessages, `\n \n \t \t \t \t \t${str_to_add}`];
      });
    }
  }, [socket,newUser]);

  const getLeftUser = useCallback((leftname:string|null) => {
    if(leftname){
      setMessages((prevMessages) => {
        let str_to_add = `${leftname} left the room`;
        return [...prevMessages, `\n \n \t \t \t \t \t${str_to_add}`];
      });
    }
  }, [socket,leftUser]);

  const getMessages = useCallback( (data: messageProps) => {
    if(data.message && data.username){
      let str_to_add = `${data.username}: ${data.message}`;
      setMessages((prevMessages) => [...prevMessages, `\n \n ${str_to_add}`]);
    }
  }, [socket,receivedMessage,newUser]);

  useEffect(()=>{
    socket.on('user-connected',(newUsername:string) => {
      setNewUser(newUsername);
    });
    getNewUser(newUser);
  },[newUser])

  useEffect(()=>{
    socket.on('user-disconnected',(leftUsername:string) => {
      setLeftUser(leftUsername);
    });
    getLeftUser(leftUser);
  },[socket,leftUser])

  useEffect(() => {
    socket.on('message-receive',  (data: { message: string, roomId: string, username: string }) => {
      setReceivedMessage(data);
    });
    getMessages(receivedMessage);
  }, [socket, receivedMessage]); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      socket.emit('message', {
        message,
        roomId,
        username,
      });

      handleTextAreaChange();
    }
  }

  const handleTextAreaChange = () => {
    let str_to_add = `${username}: ${message}`;
    setMessages(prevMessages => [...prevMessages, `\n \n ${str_to_add}`]);
    setMessage('');
  }

  return (
    <div className={styles.mainchat}>
      <div>
        <Textarea
          width='380px'
          height='650px'
          value={messages.join('')}
          readOnly
        />
      </div>
      <div className={styles.cont}>
        <div>
        <ArrowRightIcon marginRight='10px' />
        </div>
        <div>
        <input
          type='text'
          value={message}
          placeholder='Type your message here!'
          className={styles.inp}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleEnter(e)}
        />
        </div>
      </div>
    </div>
  );
};

export default Chat;
