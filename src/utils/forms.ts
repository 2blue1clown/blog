
export const toJSON = (formData:FormData) => {
    let json:any = {}
    let it = formData.entries()
    let pair = it.next()
    
    while(!pair.done) {
        json[pair.value[0]] = pair.value[1]
        pair = it.next()
    }
    return json
}

export interface InvalidationCondition {
    condition: (data:any) => boolean,
    msg: string
}


export const validateForm = (formData: FormData,invalidationConditions:InvalidationCondition[]) => {
    // username must be more than 2 ch but less than 12
    // password must be more than 7 ch  
    const data = toJSON(formData)
    let errors:string[] = []
    let valid = true

    invalidationConditions.forEach(invalidation => {
        if(invalidation.condition(data)){
            errors = [...errors,invalidation.msg]
            valid = false
        }
    })
    return {errors,valid}
}
