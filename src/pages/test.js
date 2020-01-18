import React from 'react'

export default () => (
    <div css={{textAlign: "center"}}>
        <form data-netlify="true" name="sad" method="POST">
            <input type="hidden" name="form-name" value="sad" />
            <input type="text" name="name2"/>
            <button type="submit">submit</button>
        </form>
    </div>
)