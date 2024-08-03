"use client"

import React from 'react';
import { Box, Text, Button, Link, VStack, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

const MotionBox = motion(Box);

const Page = () => {
  return (
    <Box
      position="relative"
      w="100%"
      h="100vh"
      bg="gray.900"
    >
      <BackgroundGradientAnimation>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          zIndex={1}
        >
          <VStack spacing={8} alignItems="center" textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Heading
                as="h1"
                fontSize={["5xl", "6xl", "7xl"]}
                fontFamily="'Pacifico', cursive"
                textShadow="3px 3px 6px rgba(0, 0, 0, 0.3)"
                bgGradient="linear(to-r, #FFD700, #FFA500)"
                bgClip="text"
              >
                Doodler
              </Heading>
            </MotionBox>

            <Text
              fontSize={["xl", "2xl"]}
              maxWidth="600px"
              opacity={0.8}
              color="white"
            >
              Unleash your creativity and start doodling with friends in real-time!
            </Text>

            <Link href="/Room" textDecoration="none">
              <Button
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                size="lg"
                bg="rgba(255, 255, 255, 0.2)"
                color="white"
                fontWeight="bold"
                borderRadius="full"
                px={8}
                py={4}
                _hover={{
                  bg: "rgba(255, 255, 255, 0.3)",
                }}
                backdropFilter="blur(10px)"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              >
                Let's Doodle!
              </Button>
            </Link>
          </VStack>
        </Box>
      </BackgroundGradientAnimation>
    </Box>
  );
};

export default Page;