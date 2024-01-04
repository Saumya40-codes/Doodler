"use client"

import React, { useState } from 'react';
import styles from './Room.module.css';
import EnterCode from '../components/EnterCode/EnterCode';
import { Button } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import Toast from '../components/Toast/toast';
import socket from '@/utils/socket';

const Room = () => {
  const [roomCode, setRoomCode] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [clickJoin, setClickJoin] = useState<boolean>(false);
  const [clickCreate, setClickCreate] = useState<boolean>(false);
  const [error, setError] = useState<string>('');  
  const [access, setAccess] = useState<string>('public');
  const[clickRandom, setClickRandom] = useState<boolean>(false);

  const generateRoomCode = () => {
    const newRoomCode = nanoid(6);
    setRoomCode(newRoomCode);
    return newRoomCode;
  };

  const handleNew = async () => {
    const generatedRoomCode = generateRoomCode();

    const data = {
      id: generatedRoomCode,
      owner: user,
      access,
      members: [user],
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
      localStorage.setItem('user',user);
      localStorage.setItem('room',generatedRoomCode);
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

    const data = {id:roomCode, user};

    const res = await fetch('/api/room/joinroom',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    // console.log(result)

    if(result.status === 200){
      localStorage.setItem('user',user);
      localStorage.setItem('room',roomCode);
      window.location.href = `/${roomCode}/room`;
    }
    else if(result.status === 404){
      setError('Room not found');
    }
  }

  const handleRandom = async() => {
    try{
      const res = await fetch('/api/room/joinroom');
      const result = await res.json();
      const roomId = result.id;

      const data = {
        id: roomId,
        user: user,
      }

      const res2 = await fetch('/api/room/joinroom',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result2 = await res2.json();
      if(result2.status === 200){
        localStorage.setItem('user',user);
        localStorage.setItem('room',roomId);
        window.location.href = `/${roomId}/room`;
      }
      else if(result2.status === 404){
        setError('Internal server error occured');
      }
    }
    catch(err){
      setError('Internal server error');
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
            <div className='flex justify-center'>
              <Button
                colorScheme="teal"
                variant="outline"
                size="sm"
                onClick={() => {
                  setClickJoin((prevClickJoin) => !prevClickJoin)
                  setClickCreate((prevClickCreate) => !prevClickCreate)
                  setError('');
                }}
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
                  switch(true){
                    case clickCreate:
                      handleNew();
                      break;
                    case clickRandom:
                      handleRandom();
                      break;
                    default:
                      handleJoin();
                      break;
                  }
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
      <div className={styles.randomBtn}>
      <Button
          colorScheme="teal"
          variant="outline"
          size="lg"
          onClick={() => {
            setClickJoin((prevClickJoin) => !prevClickJoin);
            setClickRandom((prevClickRandom) => !prevClickRandom);
          }}
        >
          Join Random Room
        </Button>
      </div>
    </div>
  );
};

export default Room;
