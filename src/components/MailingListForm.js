import React from 'react'
import { Box, Flex, Heading } from 'rebass'
import { ClickableButton, PrettyInput } from "./rebass";
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
            <ClickableButton p={2} onClick={submit} width={3/5} m='auto' variant='accent'>
                Make It So
            </ClickableButton>
        </Flex>
    )
}


export default MailingListForm