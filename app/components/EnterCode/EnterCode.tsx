import React from 'react';
import { Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react';
import styles from './EnterCode.module.css';

interface EnterCodeProps {
  text: string;
  onChange: (value: string) => void;
  clickCreate: boolean;
  onSelectChange: (value: string) => void;
}

const EnterCode = ({ text, onChange, clickCreate, onSelectChange }: EnterCodeProps) => {
  return (
    <div className={styles.btns}>
      <Stack spacing={4}>
        <InputGroup className={styles.inps}>
          <div className={styles.block}>
            <InputLeftAddon backgroundColor="#87CEEB" fontWeight="bold" color="#000000" marginRight="10px">{text.includes('name') ? 'name' : 'code'}</InputLeftAddon>
            <Input
              type="tel"
              placeholder={text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target?.value)}
              className={styles.inp}
            />
          </div>
          {clickCreate && (
            <div className={styles.block}>
              <InputLeftAddon backgroundColor="#87CEEB" fontWeight="bold" color="#000000" marginRight="10px">access</InputLeftAddon>
              <select
                title="sel"
                className={styles.access}
                onChange={(e) => {
                  onSelectChange(e.target?.value);
                }}
              >
                <option value="public" className={styles.opt}>
                  public
                </option>
                <option value="private" className={styles.opt}>
                  private
                </option>
              </select>
            </div>
          )}
        </InputGroup>
      </Stack>
    </div>
  );
};

export default EnterCode;
