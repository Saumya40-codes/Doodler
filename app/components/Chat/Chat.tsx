import React from 'react'
import { Textarea } from '@chakra-ui/react'
import styles from './chat.module.css'

const Chat = ({roomId}:{roomId:string}) => {
  return (
    <div className={styles.mainchat}>
      <div>
      <Textarea width='380px' height='650px' value='Welcome to Doodler!' />
      </div>
      <div>
        <input type='text' placeholder='Type your message here!' className={styles.inp} />
      </div>
    </div>
  )
}

export default Chat
