"use client"

import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react';

const Toast = ({ status, text }: { status: 'error' | 'warning' | 'success', text: string }) => {
    const toast = useToast();
    let bfore:boolean = false;

    useEffect(() => {
        if (text !== '' && !bfore) {
            bfore = true;
            toast({
                title: text,
                status: status,
                isClosable: true,
                duration: 3000,
                onCloseComplete: () => {
                    text = '';
                    bfore = false;
                },
            });
        }
    }, []);

    return (
        <div></div>
    )
}

export default Toast;
