import React from 'react'
import {useRouteData} from "react-static"

export default () => {
    const { data } = useRouteData()
    console.log('this is where we iterate over the portfolio items', data)
    return (
        <div css={{textAlign: "center"}}>
            <h1>this is a portfolio</h1>
        </div>
    )
}
