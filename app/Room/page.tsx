import React from 'react'
import Btns from '../components/Btns/btns'
import styles from './Room.module.css'

const Room = () => {
  return (
    <div className={styles.main}>
      <div className={styles.roomBtns}>
        <Btns text='Join Room'/>
        <Btns text='Create Room'/>
      </div>
    </div>
  )
}

export default Room
