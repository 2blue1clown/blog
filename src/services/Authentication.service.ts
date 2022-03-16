
interface LoginDetails {
    username:string,
    password:string
}

export const AuthenticationService = {
    login(json:LoginDetails) {
        console.log('...attempting login with',json)
        if(true){
            window.localStorage.setItem('username',json.username)
            window.localStorage.setItem('jwt','token')
            return true
        } else {
            return false
        }
    },
    logout() {
        console.log('logging out')
        window.localStorage.removeItem('username')
        window.localStorage.removeItem('jwt')
    }

}