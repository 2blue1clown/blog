import {  Heading, Text, VStack } from "@chakra-ui/react"

const MainContent= () => {

    return (
        <VStack spacing={8}>
            
            <Heading as='h1' size='4xl'>Blog</Heading>
            
            <Text>This is the content of the blog. Feel free to comment! Blah blah blah blah</Text>
        </VStack>
    )
}

export default MainContent

