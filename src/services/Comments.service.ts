
export interface Comment {
    topic:String,
    content:String,
    author?:String,
    date?:Date
}

export const CommentsService = {
    get() {
        console.log('getting comments from database')
        return [{
            topic:'Test comment',
            content:'This did not come from the database. It came from the service.',
            author:'🐕‍🦺',
            date:new Date()
        }]
    },
    post(comment:Comment):Comment{
        console.log('posting comment to database')
        
        return {...comment,
            date: new Date(),
            author:'🐠'
        }
    }
}