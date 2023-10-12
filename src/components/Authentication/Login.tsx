import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { type InvalidationCondition, validateForm } from "../../utils/forms";

import { useLogin } from "../../utils/hooks/authentication";
import ValidationErrors from "../ValidationErrors/ValidationErrors";

interface LoginProps {
  onToggle: Function;
}

const invalidateConditions: InvalidationCondition[] = [
  {
    condition: (data: any) =>
      data.username.length <= 2 || data.username.length > 12,
    msg: "Username length must be between 2 and 13 characters long.",
  },
  {
    condition: (data: any) => data.password.length <= 7,
    msg: "Password must be longer than 7 characters",
  },
];

const Login = (props: LoginProps) => {
  const { login, stage } = useLogin();

  const [errors, setErrors] = useState<string[]>([]);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const { errors, valid } = validateForm(formData, invalidateConditions);

    if (valid) {
      login(formData, props.onToggle);
      setErrors([]);
    } else {
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <VStack>
        <FormControl>
          <HStack gap={2}>
            <FormLabel htmlFor="username" m="0">
              Username
            </FormLabel>
            <Input id="username" name="username"></Input>
            <FormLabel htmlFor="password" m="0">
              Password
            </FormLabel>
            <Input name="password" type="password"></Input>
            <Button type="submit" px="8">
              Login
            </Button>
          </HStack>
        </FormControl>

        <ValidationErrors errors={errors}></ValidationErrors>

        {stage === "before login" && errors.length === 0 && <Text>🐠🐠🐠</Text>}
        {stage === "processing login" && (
          <Text> ... Processing login ... </Text>
        )}
        {stage === "successful login" && <Text>Login successful! 💪✔</Text>}
        {stage === "failed login" && <Text>Login failed... 😅❌</Text>}
      </VStack>
    </form>
  );
};

export default Login;
