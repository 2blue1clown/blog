import { Box, Button, Fade, HStack, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { useContext} from "react"
import { UserContext } from "../../context/UserContext"
import Authentication from "./Authentication"

const HiddenAuthentication = () => {

    const { isOpen, onToggle } = useDisclosure()
    const background = useColorModeValue('gray.100','gray.700')
    const {authenticated} = useContext(UserContext)

    return  <>
                <Button zIndex={2} onClick={onToggle}>{authenticated ? "🔓": "🔐"}</Button>

                <Fade in={isOpen}>
                {isOpen && 
                <div>
                    <div 
                        onClick={onToggle} 
                        style={{position:'fixed',width:'100vw',height:'100vh',top:'0',left:'0',zIndex:'1'}}
                        >
                    </div> {/*This was my solution to make it so that if you click off the auth then  */}
                    
                        <HStack width='full' position='absolute' left='0' justifyContent='center' top='20'>
                            <Box padding='40px' bg={background} rounded={10} zIndex={2}>
                                <Authentication onToggle={onToggle}></Authentication>
                            </Box>
                        </HStack>
                    </div>}
                </Fade>
            </>
    

}

export default HiddenAuthentication