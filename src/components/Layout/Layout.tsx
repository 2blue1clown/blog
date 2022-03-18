import { Button, HStack, useColorMode, VStack } from "@chakra-ui/react";

import Authentication from "../Authentication/Authentication";


export default function Layout({children}:any) {

    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <VStack width='full'>
            <VStack width='full' maxW={'90ch'}>
                <HStack justifyContent='space-between'>
                <Authentication />
                <Button onClick={toggleColorMode}>⚡</Button>
                </HStack>  
                <main style={{width:'100%'}}>{children}</main>
            </VStack>
        </VStack>
    )
    
}

