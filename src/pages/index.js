import React from 'react'
import { useRouteData } from 'react-static'

export default () => {
    const { data } = useRouteData()

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.intro}</p>
        </div>
    )
}