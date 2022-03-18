import { Button, Text, VStack } from "@chakra-ui/react"
import { useLogin } from "../../utils/hooks/authentication"

interface LogoutProps {
        onToggle: Function
}

const Logout = (props:LogoutProps) => {

    const {logout} = useLogin()

    const handleLogout = () => {
            logout(props.onToggle)
    }

    return <VStack>
                <Text>{typeof window === 'undefined' ? "Greetings!" : `Greetings ${window.localStorage.getItem('username')}!`}</Text>
                <Button onClick={handleLogout}>Logout</Button>
        </VStack>
}

export default Logout