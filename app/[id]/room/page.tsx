"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Canvas from '@/app/components/Canvas/Canvas';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Memberlist from '@/app/components/MemberList/Memberlist';
import Chat from '@/app/components/Chat/Chat';
import { BackgroundBeams } from "@/components/ui/background-beams";

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
    <Box w="100%" h="100vh" bg='gray.800' color="white" position="relative">
      <BackgroundBeams />
      <Flex
        direction="column"
        h="100%"
        position="relative"
        zIndex={1}
      >
        <Heading as="h1" size="xl" textAlign="center" py={4} color="white">
          Doodle Room: {id}
        </Heading>
        <Flex flex={1} p={4} gap={4} overflow="hidden">
          <CustomBox>
            <Memberlist roomId={id as string} />
          </CustomBox>
          <Box flex="3" bg='gray.800' borderRadius="lg" boxShadow="lg" overflow="hidden">
            <Canvas roomId={id as string} />
          </Box>
          <CustomBox>
            <Chat roomId={id as string} username={user} />
          </CustomBox>
        </Flex>
      </Flex>
    </Box>
  );
};

const CustomBox: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box flex="1" bg='gray.800' borderRadius="lg" boxShadow="lg" overflow="hidden">
      {children}
    </Box>
  );
}

export default Page;