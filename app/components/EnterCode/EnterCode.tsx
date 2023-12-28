import React from 'react';
import { Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react';
import styles from './EnterCode.module.css';

interface EnterCodeProps {
  text: string;
  onChange: (value: string) => void;
}

const EnterCode: React.FC<EnterCodeProps> = ({ text, onChange }) => {
  return (
    <div className={styles.btns}>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon children={text.includes('name') ? 'name' : 'code'} />
          <Input
            type="tel"
            placeholder={text}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e.target?.value)}
          />
        </InputGroup>
      </Stack>
    </div>
  );
};

export default EnterCode;
