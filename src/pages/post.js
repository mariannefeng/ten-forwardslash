import React from 'react'
import { useRouteData } from 'react-static'
import { Box } from 'rebass'

import { PageHero, BrandedMainHeading } from '../components/rebass';


function Credits() {
    const { data } = useRouteData()
    console.log('data', data)
    return (
        <Box>
            <Box bg='white' py={3} >
                <BrandedMainHeading fontSize={5} textAlign='center'>{data.name}</BrandedMainHeading>
                <div>{data.content}</div>
            </Box>
        </Box>
    )
}

export default Credits
