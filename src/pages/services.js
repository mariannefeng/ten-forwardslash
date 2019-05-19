import React from 'react'
import { useRouteData } from "react-static";
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import { Flex, Heading } from 'rebass'

import { colors } from '../theme'
import { Section, FlexContent, TextNoFirstMarginP, PageHero } from 'components/rebass';

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

function Services() {
    const { data } = useRouteData()

    return (
        <div>
            <PageHero bg='brightorange' color='white' title={data.title} blurb={data.servicesDesc}/>
            <Section bg='white'>
                <FlexContent flexDirection='column' my={3} px={4} pt={4}>
                    {data.serviceSections.map((service, i) => {
                        return (
                            <Flex bg='anotherblue' color='white' key={i} p={[4, 5]} mb={4} mx={1} flexDirection='column'>
                                <Heading fontSize={4} mb={2} id={service.anchorId}>{service.name}</Heading>
                                <Heading fontSize={2} fontFamily='mono' mb={3}>{service.tagline}</Heading>
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
