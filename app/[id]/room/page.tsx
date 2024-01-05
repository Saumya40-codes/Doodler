"use client"

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Canvas from '@/app/components/Canvas/Canvas';
import styles from './room.module.css'
import Memberlist from '@/app/components/MemberList/Memberlist';
import Chat from '@/app/components/Chat/Chat';

const Page = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState<string | null>(null);

  useEffect(() => {
    
    const getUser = async() =>{
      const storedUser = await localStorage.getItem('user');
      setUser(storedUser);
    }

    getUser();
  }, [user]); 


  return (
    <div className={styles.main}>
      <div className={styles.memberlist}>
        <Memberlist roomId={id as string}/>
      </div>
      <div className={styles.canvas}>
        <Canvas roomId={id as string}/>
      </div>
      <div className={styles.chat}>
        <Chat roomId={id as string} username={user} />
      </div>
    </div>
  );
};

export default Page;