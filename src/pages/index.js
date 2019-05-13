import React from 'react'
import { useRouteData } from 'react-static'

export default () => {
    const { data } = useRouteData()

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.titleTagline}</p>
            <p>{data.ctaButton.ctaButtonText}</p>
            <p>{data.ctaOne}</p>
            <p>{data.blocks}</p>
            <p>{data.ctaTwo}</p>
        </div>
    )
}