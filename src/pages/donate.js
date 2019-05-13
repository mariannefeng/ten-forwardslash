import React from 'react'
import { useRouteData } from "react-static";

export default () => {
    const { data } = useRouteData()

    return (
        <div>
            {data.title}
            {data.content}
        </div>
    )
}