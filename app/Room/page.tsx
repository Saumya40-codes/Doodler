'use client'

import React, { useState } from 'react'
import styles from './Room.module.css'
import EnterCode from '../components/EnterCode/EnterCode'
import { Button } from '@chakra-ui/react'
import { nanoid } from 'nanoid'

const Room = () => {
  const [roomCode, setRoomCode] = useState<string>('');
  const [roomOwner, setRoomOwner] = useState<string>('');
  const [clickJoin, setClickJoin] = useState<boolean>(false);
  const [clickCreate, setClickCreate] = useState<boolean>(false);

  function generateRoomCode() {
    const newRoomCode = nanoid(6);
    setRoomCode(newRoomCode);
  }
  
  const handleNew = async() => {
    console.log('new room');
    generateRoomCode();
    
    const data = {
      id: 'some-id',
      owner: 'some-owner',
      members: ['member1', 'member2']
    };
    
    const res = await fetch('/api/room/newroom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log(result);
  }

  return (
    <div className={styles.main}>
      <div className={ clickJoin ?styles.overlay:''}>
        {clickJoin &&(
          <div className={styles.enterCodeContainer}>
          <EnterCode 
          text="Enter name"
          onChange={(val) => setRoomOwner(val)}
          />
          {!clickCreate && <EnterCode  
          text="Enter code" 
          onChange={(val) => setRoomCode(val)}
          />}
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
          onClick={() => {
            setClickJoin((prevClickJoin) => !prevClickJoin);
            setClickCreate(false);
          }}
        >
          Enter Code
        </Button>

        <Button colorScheme="teal" variant="outline" size="lg"  onClick={()=>{
            setClickJoin((prevClickJoin) => !prevClickJoin);
            setClickCreate((prevClickCreate) => !prevClickCreate);
        }}>
          Create Room
        </Button>
      </div>
    </div>
  );
};

export default Room;