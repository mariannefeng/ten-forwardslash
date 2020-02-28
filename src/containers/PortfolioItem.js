import React from 'react'
import { useRouteData } from 'react-static'
import { Box } from 'rebass'

import {BrandedMainHeading, Section} from '../components/rebass'
import styled from "styled-components";
import ReactMarkdown from "react-markdown"


const PortfolioContainer = styled(Box)`
img {
  width: 100%;
  object-fit: contain;
}
`

function PortfolioItem() {
    const { data } = useRouteData()
    return (
        <Section bg='white'>
            <Box>
                <Box bg='white' py={3} >
                    <BrandedMainHeading fontSize={5} textAlign='center'>{data.name}</BrandedMainHeading>
                    <PortfolioContainer><ReactMarkdown source={data.content}/></PortfolioContainer>
                </Box>
            </Box>
        </Section>
)
}

export default PortfolioItem
