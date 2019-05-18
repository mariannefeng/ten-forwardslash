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
        <div className='form-control'>
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
                ref={node => (email = node)}
                type="email"
                placeholder="Your Email"
            />
            <button className='button primary' onClick={submit}>
                Make It So
            </button>
        </div>
    )
}


export default MailingListForm