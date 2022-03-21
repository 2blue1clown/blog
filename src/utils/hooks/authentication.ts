import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { AuthenticationService } from "../../services/Authentication.service"
import toJSON from "../forms"

export const  useLogin = () => {

    const {authenticated,setAuthenticated} = useContext(UserContext)
    const [stage,setStage] = useState('before login')

    useEffect(() => {
        if(typeof window === 'undefined'){ return }
        else {
            if(window.localStorage.getItem('username')){
                setAuthenticated(true)
            }
        }
    },[])

    const logout = (onToggle:Function) => {  
        onToggle()
        setTimeout(() => {
            setAuthenticated(false)
        },1000)
        AuthenticationService.logout()
    }

    const login = async (formData:FormData,onToggle:Function) => {
        setStage('processing login')
        const success = await AuthenticationService.login(toJSON(formData))
        if(success){
            setTimeout(() => {
                onToggle()
                setTimeout(() => {
                    setAuthenticated(true)
                },500)
                

            },1000)
            setStage('successful login')
        } else {
            setStage('failed login')
        }
        return success
    }

    return {authenticated,stage,login,logout}
}