import React from 'react'
import {useRouteData} from "react-static"

export default () => {
    const { data } = useRouteData()
    console.log('data', data)
    return (
        <div css={{textAlign: "center"}}>
            <h1>this is a portfolio</h1>
        </div>
    )
}
