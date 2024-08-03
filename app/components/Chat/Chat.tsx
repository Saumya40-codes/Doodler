'use client'

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { VStack, Box, Text, Input, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import socket from '@/utils/socket';

interface ChatProps {
  roomId: string;
  username: string | null;
}

interface MessageProps {
  message: string | null;
  roomId: string | null;
  username: string | null;
}

const Chat = ({ roomId, username }: ChatProps) => {
  const [messages, setMessages] = useState(['Welcome to Doodler!']);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleMessage = useCallback((data: MessageProps) => {
    if (data.message && data.username) {
      setMessages((prev) => [...prev, `${data.username}: ${data.message}`]);
    }
  }, []);

  useEffect(() => {
    socket.on('user-connected', (newUsername: string) => {
      setMessages((prev) => [...prev, `${newUsername} joined the room`]);
    });

    socket.on('user-disconnected', (leftUsername: string) => {
      setMessages((prev) => [...prev, `${leftUsername} left the room`]);
    });

    socket.on('message-receive', handleMessage);

    return () => {
      socket.off('user-connected');
      socket.off('user-disconnected');
      socket.off('message-receive');
    };
  }, [handleMessage]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', { message, roomId, username });
      setMessages((prev) => [...prev, `${username}: ${message}`]);
      setMessage('');
    }
  };

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
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <Button onClick={sendMessage} colorScheme="blue" leftIcon={<ArrowRightIcon />}>
          Send
        </Button>
      </Flex>
    </Box>
  );
};

export default Chat;