"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Canvas from '@/app/components/Canvas/Canvas';
import { Box, Flex, Heading, VStack, Text, Divider } from '@chakra-ui/react';
import Memberlist from '@/app/components/MemberList/Memberlist';
import Chat from '@/app/components/Chat/Chat';

const Page: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const storedUser = await localStorage.getItem('user');
        if (!storedUser || storedUser === 'null') {
          window.location.href = '/Room';
        }
        setUser(storedUser);
      } catch (err) {
        window.location.href = '/Room';
      }
    }

    getUser();
  }, []);

  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear(to-r, #f5f5f5, #c1c1c1)" // Gradient background
      color="white"
      display="flex"
      flexDirection="column"
    >
      <Flex
        direction="row"
        justify="space-between"
        align="flex-start"
        p={8}
        gap={4}
        w="100%"
        h="100%"
        overflow="hidden"
      >
        <Box flex="1" p={4} bg="rgba(0, 0, 0, 0.6)" borderRadius="lg" boxShadow="lg">
          <Memberlist roomId={id as string} />
        </Box>
        <Box flex="2" p={4} bg="rgba(0, 0, 0, 0.6)" borderRadius="lg" boxShadow="lg" position="relative">
          <Canvas roomId={id as string} />
        </Box>
        <Box flex="1" p={4} bg="rgba(0, 0, 0, 0.6)" borderRadius="lg" boxShadow="lg">
          <Chat roomId={id as string} username={user} />
        </Box>
      </Flex>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        p={4}
        bg="rgba(0, 0, 0, 0.6)"
        borderTop="1px solid rgba(255, 255, 255, 0.3)"
      >
        <Text textAlign="center" fontSize="sm" color="gray.300">
          Doodle Room © 2024
        </Text>
      </Box>
    </Box>
  );
};

export default Page;
