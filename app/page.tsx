"use client"

import React from 'react';
import { Box, Text, Button, Link } from '@chakra-ui/react';

const Page = () => {
  return (
    <Box
      bgGradient="linear(to-r, teal.300, blue.500)"
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      color="white"
      fontSize="3xl"
    >
      <Text
        color="white"
        fontSize="6xl"
        fontFamily="cursive" 
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
      >
        Doodler
      </Text>

      <Link href="/Room" textDecoration="none">
      <Button
        width="200px"
        height="50px"
        bgGradient="linear(to-r, red.300, purple.500)"
        size="lg"
        variant="outline"
        position="absolute"
        bottom="50%"
        left="50%"
        transform="translateX(-50%)"
      >
        Let's Doodle
      </Button>
      </Link>
    </Box>
  );
};

export default Page;
