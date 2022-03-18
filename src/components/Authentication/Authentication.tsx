import { Button, FormControl, FormLabel, HStack, Input, Text, VStack } from "@chakra-ui/react"
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
            ? <VStack>
            <Text> Welcome {window.localStorage.getItem('username')}</Text>
            <Button onClick={logout}>Logout</Button>
            </VStack>
            : <form onSubmit={handleLogin}>
                <FormControl>
                    <HStack gap={2}>
                        <FormLabel htmlFor="username" m='0'>Username</FormLabel>
                        <Input id='username' name='username' ></Input>
                        <FormLabel htmlFor="password" m='0'>Password</FormLabel>
                        <Input name="password" type='password'></Input>
                        <Button type='submit' px='8'>Login</Button>
                    </HStack>
                </FormControl>
            </form>
            } 
        </HStack>
    )
}

export default Authentication