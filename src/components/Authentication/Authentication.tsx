import { HStack } from "@chakra-ui/react"
import { useLogin } from "../../utils/hooks/authentication"
import Login from "./Login"
import Logout from "./Logout"

interface AuthenticationProps {
    onToggle: Function
}

const Authentication = (props:AuthenticationProps) => {

    const {authenticated} = useLogin()
 
    return (
        <HStack>
            {authenticated
            ? <Logout onToggle={props.onToggle}/>
            : <Login onToggle={props.onToggle}/>
            } 
        </HStack>
    )
}

export default Authentication