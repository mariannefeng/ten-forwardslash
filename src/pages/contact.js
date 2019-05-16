import React from 'react'
import { useRouteData } from "react-static";

function Contact() {
    const { data } = useRouteData()

    return (
        <div>
            <p>This is how you contact us</p>
        </div>
    )
}

export default Contact