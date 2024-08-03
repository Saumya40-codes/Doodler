"use client"

import React, { useEffect, useState } from 'react';
import { VStack, Box, Text, Avatar, Flex, useColorModeValue } from '@chakra-ui/react';
import { PersonIcon } from '@radix-ui/react-icons';
import socket from '@/utils/socket';

interface MemberProps {
  roomId: string;
}

const Memberlist = ({ roomId }: MemberProps) => {
  const [members, setMembers] = useState([]);
  const textColor = useColorModeValue('gray.800', 'white');

  useEffect(() => {
    getMembers();

    socket.on('user-disconnected', () => getMembers());
    socket.on('user-connected', () => getMembers());

    return () => {
      socket.off('user-disconnected');
      socket.off('user-connected');
    };
  }, [roomId]);

  const getMembers = async () => {
    try {
      const res = await fetch('/api/room/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId }),
      });
      const data = await res.json();
      setMembers(data?.mem_list);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box h="100%" bg='gray.900' p={4} overflowY="auto">
      <Text fontSize="xl" fontWeight="bold" mb={4} color='blue.500'>
        Room Members
      </Text>
      <VStack spacing={3} align="stretch">
        {members.map((member, index) => (
          <Flex
            key={index}
            align="center"
            p={2}
            borderRadius="md"
            bg={useColorModeValue('gray.100', 'gray.700')}
          >
            <Avatar
              size="sm"
              icon={<PersonIcon />}
              bg={useColorModeValue('blue.500', 'blue.300')}
              color="white"
              mr={3}
            />
            <Text color={textColor}>{member}</Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Memberlist;