import { createContext } from "react";

export const UserContext = createContext({authenticated:false, setAuthenticated: (auth:boolean) => {}})