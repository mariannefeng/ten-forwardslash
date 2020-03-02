import React from 'react'
import { useRouteData } from 'react-static'
import { Box } from 'rebass'

import { BrandedMainHeading, Section, StyledBrandedSubHeading } from '../components/rebass'
import {LinkRenderer, HeaderRenderer} from "../components/Markdown"
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
        <Section bg='white' flexDirection='column' my={3} px={[3,4,6]}>
            <BrandedMainHeading textAlign='center' alignSelf='center' fontSize={[4,5]} my={4}>{data.title}</BrandedMainHeading>
            <PortfolioContainer><ReactMarkdown
                renderers={{
                    link: LinkRenderer,
                    heading: StyledBrandedSubHeading
                }}
                source={data.content}/></PortfolioContainer>
        </Section>
)
}

export default PortfolioItem
