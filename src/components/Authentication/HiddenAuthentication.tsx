import { Box, Button, Fade, HStack, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import Authentication from "./Authentication"

const HiddenAuthentication = () => {

    const { isOpen, onToggle } = useDisclosure()
    const background = useColorModeValue('gray.100','gray.700')

    return  <>
                <Button onClick={onToggle}>🔐</Button>
                <Fade in={isOpen}>
                    <HStack width='full' position='absolute' left='0' justifyContent='center' top='20' zIndex={1}>
                        <Box padding='40px' bg={background} rounded={10}>
                            <Authentication></Authentication>
                        </Box>
                    </HStack>
                </Fade>
            </>
    

}

export default HiddenAuthentication