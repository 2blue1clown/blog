import { Button, Heading, Text, VStack } from "@chakra-ui/react"
import {useColorMode} from '@chakra-ui/react'
import Authentication from "./Authentication/Authentication"

const MainContent= () => {

    const { colorMode, toggleColorMode} = useColorMode()

    return (
        <VStack spacing={8}>
            <Authentication></Authentication>
            <Heading as='h1' size='4xl'>Blog</Heading>
            <Button onClick={toggleColorMode}>⚡</Button>
            <Text>This is the content of the blog. Feel free to comment! Blah blah blah blah</Text>
        </VStack>
    )
}

export default MainContent