import { Button, FormControl, FormLabel, HStack, Input, Text } from "@chakra-ui/react"
import { FormEvent,} from "react"

import { useLogin } from "../../utils/hooks/authentication"

interface LoginProps {
    onToggle: Function
}


const Login = (props: LoginProps) => {

    const {login,stage} = useLogin()

    const handleLogin = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        //custom hook for logging in
        login(formData,props.onToggle) 
    }

    return <form onSubmit={handleLogin}>
                <FormControl>
                    <HStack gap={2}>
                        <FormLabel htmlFor="username" m='0'>Username</FormLabel>
                        <Input id='username' name='username' ></Input>
                        <FormLabel htmlFor="password" m='0'>Password</FormLabel>
                        <Input name="password" type='password'></Input>
                        <Button type='submit' px='8'>Login</Button>
                    </HStack>
                    {stage === 'before login' && <Text>🐠🐠🐠</Text>}
                    {stage === 'processing login' && 
                        <Text> ... Processing login ... </Text>
                    }
                    {stage === 'successful login' && <Text>Login successful! 💪✔</Text>}
                    {stage === 'failed login' && <Text>Login failed... 😅❌</Text>}
                </FormControl>
            </form>
}

export default Login