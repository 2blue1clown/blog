import { Button, HStack, useColorMode } from "@chakra-ui/react";

import Authentication from "../Authentication/Authentication";


export default function Layout({children}:any) {

    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <>
        <HStack justifyContent='space-between'>
        <Authentication />
        <Button onClick={toggleColorMode}>⚡</Button>
        </HStack>  
            <main>{children}</main>
        </>
    )
    
}

