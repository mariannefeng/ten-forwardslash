import React from 'react'

const MailingListForm = ({ status, message, onValidated }) => {
    let email;

    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
        });

    return (
        <div
            style={{
                background: "#efefef",
                borderRadius: 2,
                padding: 10,
                display: "inline-block"
            }}
        >
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
            <input
                style={{ fontSize: "2em", padding: 5 }}
                ref={node => (email = node)}
                type="email"
                placeholder="Your Email"
            />
            <br />
            <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
                Make It So
            </button>
        </div>
    )
}


export default MailingListForm