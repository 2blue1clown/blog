import { Box, Fade, Heading, VStack } from "@chakra-ui/react"
import Comment from "./Comment"
import NewComment from "./NewComment"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useComments } from "../../utils/hooks/comments"

/**
 * To be used in mdx to add a comments section. Includes new comments for logged in users.
 */
const Comments = () => {

    const { authenticated } = useContext(UserContext)
    const {comments,addComment} = useComments()

    return <VStack width='full' maxW={'90ch'}>
                <Heading as='h2'>
                    Comments
                </Heading>
                {comments.map((comment,i) => <Comment comment={comment} key={i}></Comment>)}
                <Fade  in={authenticated} style={{width:'100%'}}>

                    <Box width={'full'}>
                    <NewComment addComment={addComment} ></NewComment>
                    </Box>

                </Fade>
                
            </VStack>
}

export default Comments