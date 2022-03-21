import { Button, FormControl, Heading, Input, Textarea, VStack } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { FormEvent, useState} from "react";
import { BlogComment } from "../../services/Comments.service";
import { type InvalidationCondition, validateForm } from "../../utils/forms";
import ValidationErrors from "../ValidationErrors/ValidationErrors";



interface NewCommentProps {
    addComment: Function,
}

const invalidationConditions:InvalidationCondition[] = [
    {condition: (data) => data.topic.length <= 5 || data.topic.length > 200,
    msg:'Topic must be between 5 and 200 characters'},
    {condition: (data) => data.content.length <= 5 || data.topic.length > 500,
        msg:'Content must be between 5 and 500 characters'}
]

const NewComment = (props:NewCommentProps) => {

    const router = useRouter()
    const [errors,setErrors] = useState<string[]>([])

    const handleNewComment = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        const formData = new FormData(e.currentTarget)

        const {valid,errors} = validateForm(formData,invalidationConditions)

        if(valid) {
            const newComment:BlogComment = {
                topic:formData.get('topic') as string,
                content:formData.get('content') as string,
                blogName:router.pathname.slice(1) // slicing off the / at the start.
             }
    
            props.addComment(newComment)
            e.currentTarget.reset()
        
        } else {
            setErrors(errors)
        }


    }
    return (
        <VStack w='full' maxW='90ch'>

            <Heading as="h2">New Comment</Heading>

            <ValidationErrors errors={errors}></ValidationErrors>

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