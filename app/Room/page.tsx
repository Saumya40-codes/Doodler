"use client"

import React, { useState } from 'react';
import styles from './Room.module.css';
import EnterCode from '../components/EnterCode/EnterCode';
import { Button } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import Toast from '../components/Toast/toast';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const Room = () => {
  const [roomCode, setRoomCode] = useState<string>('');
  const [roomOwner, setRoomOwner] = useState<string>('');
  const [clickJoin, setClickJoin] = useState<boolean>(false);
  const [clickCreate, setClickCreate] = useState<boolean>(false);
  const [error, setError] = useState<string>('');  

  const generateRoomCode = () => {
    const newRoomCode = nanoid(6);
    setRoomCode(newRoomCode);
    return newRoomCode;
  };

  const handleNew = async () => {
    const generatedRoomCode = generateRoomCode();

    const data = {
      id: generatedRoomCode,
      owner: roomOwner,
    };

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
      setError('Internal server error');
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
    else if(result.status === 404){
      setError('Room not found');
    }
  }

  return (
    <div className={styles.main}>
      {error !== '' && <Toast status="error" text={error} />}
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
                onClick={()=>{
                  setError('');
                  clickCreate ? handleNew() : handleJoin();
                }}
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
