import { Heading, HStack, Text, VStack } from "@chakra-ui/react"
import type {Comment as CommentType} from "../../services/Comments.service"

interface CommentProps {
    comment:CommentType
}

const Comment = (props:CommentProps) => {



    return (
        <VStack w="full" maxW={'90ch'}>
            <HStack w='full'justifyContent={"space-between"}>
                <Heading as='h3' size='md' >{props.comment.topic}</Heading>
                <HStack>
                    <Heading as='h3' size= 'md'>{props.comment.author}</Heading>
                    <Heading as='h3' size='md'>{props.comment.date?.toDateString()}</Heading>
                </HStack>
            </HStack>
            <Text w="full">{props.comment.content}</Text>
        </VStack>
    )
}

export default Comment