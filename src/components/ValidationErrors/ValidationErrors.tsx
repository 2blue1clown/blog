import {Text} from '@chakra-ui/react'

interface ValidationErrorProps {
    errors: string[]
}

const ValidationErrors = (props:ValidationErrorProps) => {

    return <div>
    {props.errors.map((error,index) => 
        {
            return <Text key={index}><span style={{color:'red'}}>** </span>{error}<span style={{color:'red'}}> **</span></Text>
        })}
        </div>
}

export default ValidationErrors