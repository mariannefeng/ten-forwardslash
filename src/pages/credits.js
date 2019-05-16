import React from 'react'
import { useRouteData } from "react-static"
import ReactMarkdown from "react-markdown"

function Credits() {
    const { data } = useRouteData()

    return (
        <div>
            <h1>This wouldn't have been possible without the following libraries</h1>
        </div>

    )
}

export default Credits