import { Heading, VStack } from "@chakra-ui/react"
import Comment from "./Comment"
import NewComment from "./NewComment"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useComments } from "../../utils/hooks/comments"

interface CommentsProps {
    blogName:string
}
/**
 * To be used in mdx to add a comments section. Includes new comments for logged in users.
 */
const Comments = (props:CommentsProps) => {

    const { authenticated } = useContext(UserContext)
    const {comments,addComment} = useComments()

    return <VStack>
                <Heading as='h2'>
                    Comments
                </Heading>
                {comments.map((comment,i) => <Comment comment={comment} key={i}></Comment>)}
                {authenticated && 
                    <NewComment addComment={addComment} ></NewComment> 
                }
            </VStack>
}

export default Comments