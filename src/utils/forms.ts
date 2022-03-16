
const toJSON = (formData:FormData) => {
    let json:any = {}
    let it = formData.entries()
    let pair = it.next()
    
    while(!pair.done) {
        json[pair.value[0]] = pair.value[1]
        pair = it.next()
    }
    return json
}

export default toJSON