import React, { useEffect, useState } from 'react'
import { Card,CardBody ,Text } from '@chakra-ui/react'
import styles from './memberlist.module.css'
import socket from '@/utils/socket'

interface MemberProps{
    roomId: string,
}

const Memberlist = ({ roomId }: MemberProps) => {

    const[members,setMembers] = useState<string[]>([]);

    useEffect(() => {
        getMembers();
    }, []);

    useEffect(() => {
        socket.on('user-disconnected', (username:string) => {
            getMembers();
        });

        socket.on('user-connected', async(username:string) => {
            await getMembers();
        });
    }, []);

    const getMembers = async() =>{
        try{

            const payload = {
                roomId
            }
            const res = await fetch('/api/room/members',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            setMembers(data?.mem_list);
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div className={styles.members}>
        <Text fontSize="xl" fontWeight="bold" color="teal.400">Members</Text>
        {members && members?.map((member,index) => (
        <Card className={styles.member} key={index}>
            <CardBody>
                <Text fontSize="md" fontWeight="bold" color="teal.400" alignContent='center' className={styles.bx}>{member}</Text>
            </CardBody>
        </Card>
        ))}
    </div>
  )
}

export default Memberlist
