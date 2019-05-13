import React from 'react'
import { useRouteData } from "react-static";

export default () => {
    const { data } = useRouteData()

    return (
        <div>
            <p>React Static is a progressive static site generator for React.</p>
        </div>
    )
}