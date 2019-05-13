import React from 'react'
import { useRouteData } from "react-static";

export default () => {
    const { data } = useRouteData()

    return (
        <div>
            <p>This is an about page</p>
        </div>
    )
}