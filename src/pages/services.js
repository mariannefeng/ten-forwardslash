import React from 'react'
import { useRouteData } from "react-static";
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import { Flex, Heading } from 'rebass'

import { colors } from '../theme'
import { Section, FlexContent, TextNoFirstMarginP, PageHero, BrandedMainHeading, BrandedSubHeading } from '../components/rebass';
import { TEN_FORWARD_STAMP } from '../components/text-overlay-filler'

const SquareListWrapper = styled.div`
ul {
    list-style-type: square;
}
a {
    text-decoration: none;
    color: ${colors.brightorange} !important;
    &:visited {
        color: ${colors.yellow} !important;
    }
    &:hover, &:active {
        text-decoration: underline;
    }
}
`

const ServiceSection = styled.div`
    border-left: 1rem solid ${colors.green};
    padding-left: 2rem;
    padding-bottom: 5px;
    margin-bottom: 1rem;
`

function Services() {
    const { data } = useRouteData()

    return (
        <div>
            <PageHero bg='black' overlay={TEN_FORWARD_STAMP} color='white' title={data.title} blurb={data.servicesDesc}/>
            <Section bg='white'>
                <FlexContent flexDirection='column' my={3} px={[0,4]} pt={4}>
                    {data.serviceSections.map((service, i) => {
                        return (
                            <Flex color='black' key={i} p={[4, 5]} mx={1} flexDirection='column'>
                                <ServiceSection>
                                    <BrandedMainHeading fontSize={[5, 6]} mb={3} id={service.anchorId}>{service.name}</BrandedMainHeading>
                                    <BrandedSubHeading fontSize={2} fontFamily='mono'>{service.tagline}</BrandedSubHeading>
                                </ServiceSection>
                                <TextNoFirstMarginP fontSize={2}><SquareListWrapper><ReactMarkdown source={service.content}/></SquareListWrapper></TextNoFirstMarginP>
                            </Flex>
                        )
                    })}
                </FlexContent>
            </Section>
        </div>
    )
}

export default Services
