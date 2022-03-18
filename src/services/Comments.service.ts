


export class BlogComment {
    topic:string
    content:string
    author?:string
    authorId?:string
    date?:Date
    blogName:string
    constructor(commentDTO:CommentDTO) {
        this.topic = commentDTO.title
        this.content = commentDTO.content
        this.author = commentDTO.username
        this.authorId = commentDTO.userId
        this.date = new Date(commentDTO.createdDate)
        this.blogName = commentDTO.blogName
    }
}


class CommentDTO {
    blogName: string;
    content: string;
    createdDate: string;
    id: string | undefined;
    title: string;
    userId: string| undefined;
    username: string | undefined;

    constructor(comment:BlogComment) {
        this.blogName =  comment.blogName,
        this.content = comment.content,
        this.title = comment.topic,
        this.username = comment.author
        this.userId = comment.authorId
        this.createdDate = '' //maybe I shoudl think of a better way to do this.
    }

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
        const comments:BlogComment[] =  responseJson.map(commentDTO => new BlogComment(commentDTO))
        return comments
    } catch (e) {
        console.error(e)
    }},
    async post(comment:BlogComment,blogName:string){

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
            const resComment = new BlogComment(responseJson)
            return resComment

        } else {
            return 
        }
        
    }
}