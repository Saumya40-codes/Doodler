import React, { useEffect, useState, useCallback, useRef } from 'react';
import { VStack, Box, Text, Input, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import socket from '@/utils/socket';

interface ChatProps {
  roomId: string;
  username: string | null;
}

interface messageProps {
  message: string | null;
  roomId: string | null;
  username: string | null;
}

const Chat = ({ roomId, username }: ChatProps) => {
  const [messages, setMessages] = useState<string[]>(['Welcome to Doodler!']);
  const [message, setMessage] = useState('');
  const [newUser, setNewUser] = useState<string | null>(null);
  const [leftUser, setLeftUser] = useState<string | null>(null);
  const [receivedMessage, setReceivedMessage] = useState<messageProps>({
    message: null,
    roomId: null,
    username: null,
  });
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

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

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    socket.emit('message', {
      message,
      roomId,
      username,
    });

    handleTextAreaChange();
  }

  const handleTextAreaChange = () => {
    let str_to_add = `${username}: ${message}`;
    setMessages(prevMessages => [...prevMessages, `\n \n ${str_to_add}`]);
    setMessage('');
  }

  return (
    <Box h="100%" bg='gray.900' display="flex" flexDirection="column">
      <VStack flex={1} spacing={3} align="stretch" p={4} overflowY="auto">
        {messages.map((msg, index) => (
          <Text key={index} color='blue.500' fontWeight='bold'>
            {msg}
          </Text>
        ))}
        <div ref={messagesEndRef} />
      </VStack>
      <Flex p={4} borderTop="1px solid" borderColor={useColorModeValue('gray.200', 'gray.600')}>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          bg='gray.300'
          textColor='darkcyan'
          fontWeight='bold'
          mr={2}
          onKeyDown={(e) => e.key === 'Enter' && handleEnter(e)}
        />
        <Button onClick={(e) => handleEnter(e)} colorScheme="blue" leftIcon={<ArrowRightIcon />}>
          Send
        </Button>
      </Flex>
    </Box>
  );
};

export default Chat;