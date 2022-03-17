import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import { AuthenticationService } from "../../services/Authentication.service"
import toJSON from "../forms"

export const  useLogin = () => {

    const {authenticated,setAuthenticated} = useContext(UserContext)

    useEffect(() => {
        if(typeof window === 'undefined'){ return }
        else {
            if(window.localStorage.getItem('username')){
                setAuthenticated(true)
            }
        }
    },[])

    const logout = () => {    
        setAuthenticated(false)
        AuthenticationService.logout()
    }

    const login = async (formData:FormData) => {
        const isAuthenticated = await AuthenticationService.login(toJSON(formData))
        console.log({isAuthenticated})
        setAuthenticated(isAuthenticated)
        if(isAuthenticated === false) { alert("Failed login attempt. Make sure username and password are correct") }
    }

    return {authenticated,login,logout}
}