import React from 'react'

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
        <div>
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

            <PrettyInput ref={node => (email = node)}
                         type="email"
                         placeholder="Your Email" />

            <ClickableButton onClick={submit}>
                Make It So
            </ClickableButton>
        </div>
    )
}


export default MailingListForm