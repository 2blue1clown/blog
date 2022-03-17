import { Button, FormControl, Heading, Input, Textarea, VStack } from "@chakra-ui/react"
import { FormEvent} from "react";
import { CommentType } from "../../services/Comments.service";

// interface NewCommentProps {
//     handleNewComment: FormEventHandler<HTMLFormElement>
// }

interface NewCommentProps {
    addComment: Function,
}

const NewComment = (props:NewCommentProps) => {

    const handleNewComment = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        const formData = new FormData(e.currentTarget)

        const newComment:CommentType = {
            topic:formData.get('topic') as String,
            content:formData.get('content') as String
         }

        props.addComment(newComment)
        e.currentTarget.reset()
        
        //get comments from the database
    }
    return (
        <VStack w='full' maxW='90ch'>

            <Heading as="h2">New Comment</Heading>

            <form style={{width:'100%'}} onSubmit={handleNewComment}>

                <FormControl w='full' maxW='90ch' >
                    <VStack spacing={3} alignItems="start">
                    <Input w='full' id='topic' name="topic" placeholder='Enter topic sentence'></Input>    
                    <Textarea w='full' name='content' placeholder="Enter comment"></Textarea>

                    <Button type="submit">Post comment</Button>

                    </VStack>
                </FormControl>

            </form>
        </VStack>
    )
}

export default NewComment