'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'

interface Props {
    text: string
}

const btns = ({text}:Props) => {


  return (
    <div className='flex justify-center'>
      <Button colorScheme="teal" variant="outline" size="lg">
        {text}
    </Button>
    </div>
  )
}

export default btns
