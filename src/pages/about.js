import React from 'react'
import { useRouteData } from "react-static";

function About() {
    const { data } = useRouteData()

    return (
        <div>
            <p>This is an about page</p>
        </div>
    )
}

export default About