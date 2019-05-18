import React from 'react'
import { useRouteData } from "react-static";
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import { Flex, Heading } from 'rebass'

import { Section, FlexContent, TextNoFirstMarginP } from 'components/rebass';

const SquareListWrapper = styled.div`
ul {
    list-style-type: square;
}
`

function Services() {
    const { data } = useRouteData()

    return (
        <div>
            <Section bg='brightorange' color='white'>
                <FlexContent flexDirection='column' m={3} px={4} flex={1}>
                    <Heading alignSelf='center' fontSize={5} mb={4}>{data.title}</Heading>
                    <TextNoFirstMarginP fontSize={3} px={[4,5]}><ReactMarkdown source={data.servicesDesc}/></TextNoFirstMarginP>
                </FlexContent>
            </Section>
            <Section bg='white'>
                <FlexContent flexDirection='column' m={3} px={4} pt={4}>
                    {data.serviceSections.map((service, i) => {
                        return (
                            <Flex bg='anotherblue' color='white' key={i} p={[4,5]} mb={4} flexDirection='column'>
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
