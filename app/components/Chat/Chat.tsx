import React, { useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { Textarea } from '@chakra-ui/react';
import styles from './chat.module.css';
import { ArrowRightIcon } from '@chakra-ui/icons';
import socket from '@/utils/socket';

const Chat = ({ roomId }: { roomId: string }) => {
  const [messages, setMessages] = useState<string[]>(['Welcome to Doodler!']);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('unknown');

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUsername(user);
    }
  }, [username]);

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

  useEffect(() => {
    socket.on('message-receive', (data: { message: string, roomId: string, username: string }) => {
      let str_to_add = `${data.username}: ${data.message}`;
      setMessages((prevMessages) => [...prevMessages, `\n \n ${str_to_add}`]);
    });

    socket.on('user-disconnected', ((username: string) => {
      setMessages((prevMessages) => {
        let str_to_add = `${username} left the room`;
        return [...prevMessages, `\n \n \t \t \t \t \t${str_to_add}`];
      });
    }));

    return () => {
      socket.off('message-receive');
      socket.off('user-disconnected');
    };
  }, []); 

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
