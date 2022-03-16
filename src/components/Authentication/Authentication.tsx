import { Button, FormControl, FormLabel, HStack, Input, Text } from "@chakra-ui/react"
import { FormEvent,} from "react"
import { useLogin } from "../../utils/hooks/authentication"

const Authentication = () => {

    const {authenticated,login,logout} = useLogin()

    const handleLogin = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        //custom hook for logging in
        login(formData)
    }
 
    return (
        <HStack>
            {authenticated
            ?<Text> Welcome {window.localStorage.getItem('username')}
            <Button onClick={logout}>Logout</Button>
            </Text>
            : <form onSubmit={handleLogin}>
                <FormControl>
                    <HStack>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input id='username' name='username'></Input>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input name="password" type='password'></Input>
                        <Button type='submit'>Login</Button>
                    </HStack>
                </FormControl>
            </form>
            } 
        </HStack>
    )
}

export default Authentication