"use client";

import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import EnterCode from '../components/EnterCode/EnterCode';
import { nanoid } from 'nanoid';
import Toast from '../components/Toast/toast';
import { Boxes } from "@/components/ui/background-boxes";

const Room = () => {
  const [roomCode, setRoomCode] = useState('');
  const [user, setUser] = useState('');
  const [error, setError] = useState('');  
  const [access, setAccess] = useState('public');
  const [clickJoin, setClickJoin] = useState(false);
  const [clickCreate, setClickCreate] = useState(false);
  const [clickRandom, setClickRandom] = useState(false);

  const generateRoomCode = () => nanoid(6);

  const endAll = () => {
    setClickJoin(false);
    setClickCreate(false);
    setClickRandom(false);
  };

  const handleNew = async () => {
    const generatedRoomCode = generateRoomCode();
    const data = { id: generatedRoomCode, owner: user, access, members: [user] };

    try {
      const res = await fetch('/api/room/newroom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if(result.message === 'Room created') {
        endAll();
        localStorage.setItem('user', user);
        localStorage.setItem('room', generatedRoomCode);
        window.location.href = `/${generatedRoomCode}/room`;
      } else {
        setError('Internal server error');
      }
    } catch (err) {
      setError('Failed to create room');
    }
  };

  const handleJoin = async () => {
    if(!roomCode) return;
    const data = {id: roomCode, user};

    try {
      const res = await fetch('/api/room/joinroom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if(result.status === 200) {
        endAll();
        localStorage.setItem('user', user);
        localStorage.setItem('room', roomCode);
        window.location.href = `/${roomCode}/room`;
      } else if(result.status === 404) {
        setError('Room not found');
      }
    } catch (err) {
      setError('Failed to join room');
    }
  };

  const handleRandom = async () => {
    try {
      const res = await fetch('/api/room/joinroom');
      const result = await res.json();
      const roomId = result.id;
      const data = { id: roomId, user };

      const res2 = await fetch('/api/room/joinroom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result2 = await res2.json();
      if(result2.status === 200) {
        endAll();
        localStorage.setItem('user', user);
        localStorage.setItem('room', roomId);
        window.location.href = `/${roomId}/room`;
      } else {
        setError('Internal server error occurred');
      }
    } catch (err) {
      setError('Failed to join random room');
    }
  };

  return (
    <Box
      position="relative"
      w="100%"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
      overflow="hidden"
      bg="gray.800" 
    >
      <Boxes />
      {error && <Toast status="error" text={error} />}
      
      <VStack spacing={10} zIndex={1} alignItems="center">
        <Heading
          as="h1"
          fontSize={["4xl", "5xl", "6xl"]}
          fontFamily="'Pacifico', cursive"
          textShadow="2px 2px 6px rgba(0, 0, 0, 0.5)"
          color="white"
          textAlign="center"
        >
          Choose Your Doodle Room
        </Heading>

        <VStack spacing={6} alignItems="center">
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            size="lg"
            bg="rgba(255, 255, 255, 0.15)"
            color="white"
            fontWeight="bold"
            borderRadius="full"
            px={8}
            py={4}
            _hover={{ bg: "rgba(255, 255, 255, 0.25)" }}
            backdropFilter="blur(8px)"
            onClick={() => setClickJoin(true)}
          >
            Enter Code
          </Button>
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            size="lg"
            bg="rgba(255, 255, 255, 0.15)"
            color="white"
            fontWeight="bold"
            borderRadius="full"
            px={8}
            py={4}
            _hover={{ bg: "rgba(255, 255, 255, 0.25)" }}
            backdropFilter="blur(8px)"
            onClick={() => {
              setClickJoin(true);
              setClickCreate(true);
            }}
          >
            Create Room
          </Button>
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            size="lg"
            bg="rgba(255, 255, 255, 0.15)"
            color="white"
            fontWeight="bold"
            borderRadius="full"
            px={8}
            py={4}
            _hover={{ bg: "rgba(255, 255, 255, 0.25)" }}
            backdropFilter="blur(8px)"
            onClick={() => {
              setClickJoin(true);
              setClickRandom(true);
            }}
          >
            Join Random Room
          </Button>
        </VStack>
      </VStack>

      {clickJoin && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.8)"
          backdropFilter="blur(10px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={2}
        >
          <Box
            bg="rgba(255, 255, 255, 0.2)"
            p={8}
            borderRadius="md"
            backdropFilter="blur(12px)"
            w="90%"
            maxW="lg"
            textAlign="center"
          >
            <Text color="white" mb={4} fontSize="xl" fontWeight="bold">
              {clickCreate ? "Create Room" : clickRandom ? "Join Random Room" : "Join Room"}
            </Text>
            <EnterCode
              text="Enter name"
              onChange={(val) => setUser(val)}
              clickCreate={clickCreate}
              onSelectChange={(val) => setAccess(val)}
            />
            {!clickCreate && !clickRandom && (
              <EnterCode
                text="Enter code"
                onChange={(val) => setRoomCode(val)}
                clickCreate={clickCreate}
                onSelectChange={(val) => setAccess(val)}
              />
            )}
            <Box mt={6} display="flex" justifyContent="center" gap={4}>
              <Button
                colorScheme="teal"
                variant="outline"
                size="md"
                onClick={() => {
                  setError('');
                  endAll();
                }}
              >
                Cancel
              </Button>
              <Button
                colorScheme="teal"
                variant="solid"
                size="md"
                onClick={() => {
                  setError('');
                  if (clickCreate) handleNew();
                  else if (clickRandom) handleRandom();
                  else handleJoin();
                }}
              >
                {clickCreate ? "Create" : "Join"}
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Room;
