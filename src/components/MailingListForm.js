import React from 'react'
import { Box, Flex } from 'rebass'
import { ClickableButton, PrettyInput } from "./rebass";

const MailingListForm = ({ status, message, onValidated }) => {
    let email;

    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
        });

    return (
        <Flex flexDirection='column' justifyContent='center' width={1}>
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && (
                <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            <Box my={4}>
                <PrettyInput ref={node => (email = node)}
                             type="email"
                             placeholder="Your Email" />
            </Box>
            <ClickableButton p={2} onClick={submit} width={3/5} m='auto' variant='accent' css={{ color: 'black' }}>
                Make It So
            </ClickableButton>
        </Flex>
    )
}


export default MailingListForm