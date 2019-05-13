import React from 'react'
import { useRouteData } from "react-static"
import ReactMarkdown from "react-markdown"

export default () => {
    const { data } = useRouteData()

    return (
        <div>
            <h1>{data.title}</h1>
            <div>
                <ReactMarkdown source={data.content} />
            </div>
        </div>

    )
}