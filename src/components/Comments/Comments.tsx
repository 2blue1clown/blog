import { Heading, VStack } from "@chakra-ui/react"

import Comment from "./Comment"
import NewComment from "./NewComment"
import type {Comment as CommentType} from "../../services/Comments.service"
import { useEffect, useState, useContext } from "react"
import {CommentsService} from '../../services/Comments.service'
import { UserContext } from "../../context/UserContext"


const Comments = () => {

    const [comments,setComments] = useState<Array<CommentType>>([])

    const { authenticated } = useContext(UserContext)

    useEffect(()=> {
        const res = CommentsService.get()
        setComments(res)
    },[])

    const addComment = async (newComment:CommentType ) => {
        const res = CommentsService.post(newComment)
        console.log(res)
        setComments([...comments,res]) //this is throwing an error for some reason.
    }

    return (  
    <VStack>
        <Heading as='h2'>
            Comments
        </Heading>

        {comments.map((comment,i) => <Comment comment={comment} key={i}></Comment>)}

        {authenticated && 
            <NewComment addComment={addComment} ></NewComment> 
        }
    </VStack>)
}

export default Comments