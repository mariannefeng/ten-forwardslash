import React from 'react'
import { useRouteData } from "react-static"
import ReactMarkdown from "react-markdown"

export default () => {
    const { data } = useRouteData()

    return (
        <div>
            <h1>This wouldn't have been possible without the following libraries</h1>
        </div>

    )
}