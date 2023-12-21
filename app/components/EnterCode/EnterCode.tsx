import React from 'react'
import { Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react'

const EnterCode = () => {
  return (
    <div>
      <Stack spacing={4}>
        <InputGroup>
        <InputLeftAddon children='code' />
        <Input type='tel' placeholder='Enter code' />
        </InputGroup>
      </Stack>
    </div>
  )
}

export default EnterCode
