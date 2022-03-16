
interface LoginDetails {
    username:string,
    password:string
}

export const AuthenticationService = {
    async login(json:LoginDetails) {

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