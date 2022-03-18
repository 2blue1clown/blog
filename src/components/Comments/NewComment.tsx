import { Button, FormControl, Heading, Input, Textarea, VStack } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { FormEvent} from "react";
import { BlogComment } from "../../services/Comments.service";



interface NewCommentProps {
    addComment: Function,
}



const NewComment = (props:NewCommentProps) => {

    const router = useRouter()

    const handleNewComment = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        const formData = new FormData(e.currentTarget)

        const newComment:BlogComment = {
            topic:formData.get('topic') as string,
            content:formData.get('content') as string,
            blogName:router.pathname.slice(1) // slicing off the / at the start.
         }

        props.addComment(newComment)
        e.currentTarget.reset()
        
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