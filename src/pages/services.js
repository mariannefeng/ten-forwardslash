import React from 'react'
import { useRouteData } from "react-static";

function Services() {
    const { data } = useRouteData()

    return (
        <div>
            <p>this is a services page</p>
        </div>
    )
}

export default Services