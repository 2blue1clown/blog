import { Button, HStack, useColorMode, VStack } from "@chakra-ui/react";

import HiddenAuthentication from "../Authentication/HiddenAuthentication";


export default function Layout({children}:any) {

    const {toggleColorMode} = useColorMode()

    return (
        <VStack width='full'>
            <VStack width='full' maxW={'90ch'} padding={5}>
                <HStack justifyContent='space-between'>
                <HiddenAuthentication />
                <Button onClick={toggleColorMode} zIndex={2}>⚡</Button>
                </HStack>  
                <main style={{width:'100%'}}>{children}</main>
            </VStack>
        </VStack>
    )
    
}

