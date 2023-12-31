"use client"

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Canvas from '@/app/components/Canvas/Canvas';
import socket from '@/utils/socket';

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
    <div>
      hello {id}
      <Canvas roomId={id as string}/>
    </div>
  );
};

export default Page;