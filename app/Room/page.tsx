'use client'

import React, { useState } from 'react'
import styles from './Room.module.css'
import EnterCode from '../components/EnterCode/EnterCode'
import { Button } from '@chakra-ui/react'
import { nanoid } from 'nanoid'

const Room = () => {
  const [roomCode, setRoomCode] = useState<string>('');
  const [clickJoin, setClickJoin] = useState<boolean>(false);

  function generateRoomCode() {
    const newRoomCode = nanoid(6);
    setRoomCode(newRoomCode);
  }
  
  const handleNew = async() => {
    generateRoomCode();
    console.log(roomCode);
  }

  return (
    <div className={styles.main}>
      <div className={ clickJoin ?styles.overlay:''}>
        {clickJoin &&(
          <div className={styles.enterCodeContainer}>
          <EnterCode />
          <div className='flex justify-center'>
          <Button
            colorScheme="teal"
            variant="outline"
            size="sm"
            onClick={() => setClickJoin((prevClickJoin) => !prevClickJoin)}
            className={styles.otherBtn}
          >
            Cancel
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            size="sm"
            className={styles.otherBtn}
          >
            Join
          </Button>
          </div>
        </div>
        )}
      </div>
      <div className={styles.roomBtns}>
        <Button 
          colorScheme="teal"
          variant="outline"
          size="lg"
          onClick={() => setClickJoin((prevClickJoin) => !prevClickJoin)}
        >
          Enter Code
        </Button>

        <Button colorScheme="teal" variant="outline" size="lg"  onClick={handleNew}>
          Create Room
        </Button>
      </div>
    </div>
  );
};

export default Room;