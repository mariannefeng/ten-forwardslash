import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import { ClickableButton, PrettyInput, ArrowClickableButton } from "./rebass";
import styled from "styled-components";

let mailMsg = styled(Box)`
    color: ${props => props.color}
`

const MailingListForm = ({ status, message, onValidated }) => {
    let email;

    const submit = () => {
        onValidated({
            EMAIL: email.value,
        });
    }

    //default is darkblue
    var msgColor

    switch(status) {
        case 'error':
            msgColor = 'white'
            break
        case 'success':
            msgColor = 'brightgreen'
            break
        case 'sending':
        default:
            msgColor = 'lightgray'
    }

    return (
        <Flex flexDirection='column' justifyContent='center' width={1}>
            <Box p={2} mt={2} color={msgColor}>
                <Heading fontSize={2} dangerouslySetInnerHTML={{__html: message}} />
            </Box>
            <Box mb={4} >
                <PrettyInput ref={node => (email = node)}
                             type="email"
                             placeholder="Your Email" />
            </Box>
            <ArrowClickableButton p={2} onClick={submit} width={3/5} color='black' m='auto' variant='transparent' buttonText='Make It So'/>
        </Flex>
    )
}


export default MailingListForm
