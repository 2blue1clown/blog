
export interface CommentType {
    topic:String,
    content:String,
    author?:String,
    authorId?:String,
    date?:Date
}

interface CommentDTO {
    blogId: number,
    content: string,
    createdDate: string,
    id: string,
    title: string,
    userId: string,
    username: string,
}

export const CommentsService = {
    async get(blogName:string) {
        
        console.log('getting comments from database')

        try{
        
        const res = await fetch(`${process.env.backendCommentsUrl}/${blogName}`, {
            method:"GET",
            mode:'cors',
            headers: {
                //'Authorization':'Bearer '+ window.localStorage.getItem("jwt"),
                'Content-Type':'application/json',
            },
        })
        
        if(res.status >= 400){
            return []
        }

        const responseJson:CommentDTO[] = await res.json()
        const comments:CommentType[] =  responseJson.map(obj => ({
            topic:obj.title,
            content:obj.content,
            date:new Date(obj.createdDate),
            authorId:obj.userId,
            author:obj.username
        }))
        return comments
    } catch (e) {
        console.error(e)
    }},
    async post(comment:CommentType,blogName:string){

        console.log('posting comment to database')
        
        if(window.localStorage.getItem("jwt")){

            console.log("posting comment...")
    
            const res = await fetch(process.env.backendCommentsUrl as string, {
                method:"POST",
                mode:'cors',
                headers: {
                    'Authorization':'Bearer '+ window.localStorage.getItem("jwt"),
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    title:comment.topic,
                    content:comment.content,
                    blogName:blogName
                })
            })
            const responseJson:CommentDTO = await res.json()
            const resComment = {
                topic:responseJson.title,
                content:responseJson.content,
                date:new Date(responseJson.createdDate),
                authorId:responseJson.userId,
                author:responseJson.username
            }
            return resComment

        } else {
            return 
        }
        
    }
}