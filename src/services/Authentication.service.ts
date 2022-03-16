
interface LoginDetails {
    username:string,
    password:string
}

export const AuthenticationService = {
    async login(json:LoginDetails) {
        console.log('...attempting login with',json)

        const res = await fetch(process.env.backendLoginUrl as string, {
            method:"POST",
            mode:'cors',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(json)
        })

        console.log(res.status)
        if(res.status >= 400) {
            return false
        }

        const responseJson = await res.json()
        console.log(responseJson)
        window.localStorage.setItem('username',json.username)
        window.localStorage.setItem('jwt',responseJson.token)
        return true
    },
    logout() {
        console.log('logging out')
        window.localStorage.removeItem('username')
        window.localStorage.removeItem('jwt')
    }

}