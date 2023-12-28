"use client"

import React from 'react'
import {useParams} from 'next/navigation'
import Canvas from '@/app/components/Canvas/Canvas'

const page = () => {

    const {id} = useParams();

  return (
    <div>
      hello {id}

      <Canvas />
    </div>
  )
}

export default page
