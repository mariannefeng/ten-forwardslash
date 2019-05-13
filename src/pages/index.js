import React from 'react'
import { useRouteData } from 'react-static'

export default () => {
    const { data } = useRouteData()

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.titleTagline}</p>
            <p>{data.ctaButton ? data.ctaButton.ctaButtonLink : 'no button link'}</p>
            <p>{data.ctaButton ? data.ctaButton.ctaButtonText : 'no button text'}</p>
            <p>{data.ctaOne}</p>
            <hr/>
            <p>{data.blocks.map((block, i) => {
                return (<span key={i}>{block.name}</span>)
            })}</p>
            <hr/>
            <p>{data.ctaTwo}</p>
        </div>
    )
}