"use client"

import React, { useState } from 'react';
import styles from './Room.module.css';
import EnterCode from '../components/EnterCode/EnterCode';
import { Button } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

const Room = () => {
  const [roomCode, setRoomCode] = useState<string>('');
  const [roomOwner, setRoomOwner] = useState<string>('');
  const [clickJoin, setClickJoin] = useState<boolean>(false);
  const [clickCreate, setClickCreate] = useState<boolean>(false);

  const generateRoomCode = () => {
    const newRoomCode = nanoid(6);
    setRoomCode(newRoomCode);
    return newRoomCode;
  };

  const handleNew = async () => {
    console.log('new room');
    const generatedRoomCode = generateRoomCode();

    const data = {
      id: generatedRoomCode,
      owner: roomOwner,
    };

    console.log(data);

    const res = await fetch('/api/room/newroom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if(result.message === 'Room created'){
      window.location.href = `/${generatedRoomCode}/room`;
    }
    else{
      setClickJoin(false);
      setClickCreate(false);
    }
  };

  const handleJoin = async() => {
    if(roomCode === ''){
      return;
    }

    const data = {id:roomCode};

    const res = await fetch('/api/room/joinroom',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result)

    if(result.status === 200){
      window.location.href = `/${roomCode}/room`;
    }
    else{
      setClickJoin(false);
      setClickCreate(false);
    }
  }

  return (
    <div className={styles.main}>
      <div className={clickJoin ? styles.overlay : ''}>
        {clickJoin && (
          <div className={styles.enterCodeContainer}>
            <EnterCode
              text="Enter name"
              onChange={(val) => setRoomOwner(val)}
            />
            {!clickCreate && (
              <EnterCode
                text="Enter code"
                onChange={(val) => setRoomCode(val)}
              />
            )}
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
                onClick={clickCreate ? handleNew : handleJoin}
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

        <Button
          colorScheme="teal"
          variant="outline"
          size="lg"
          onClick={() => {
            setClickJoin((prevClickJoin) => !prevClickJoin);
            setClickCreate((prevClickCreate) => !prevClickCreate);
          }}
        >
          Create Room
        </Button>
      </div>
    </div>
  );
};

export default Room;
