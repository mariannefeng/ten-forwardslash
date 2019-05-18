import React from 'react'
import { useRouteData } from "react-static";
import ReactMarkdown from "react-markdown"
// import styled from "styled-components"
import { Box, Flex, Heading, Image, Button, Card, Text } from 'rebass'

import { Section, FlexContent, TextNoFirstMarginP } from 'components/rebass';

function Services() {
    const { data } = useRouteData()

    return (
        <div>
            <Section bg='lightteal'>
                <FlexContent flexDirection='column' m={3} px={4} flex={1}>
                    <Heading alignSelf='center' fontSize={5} mb={4}>{data.title}</Heading>
                    <TextNoFirstMarginP><ReactMarkdown source={data.servicesDesc}/></TextNoFirstMarginP>
                </FlexContent>
            </Section>
            <Section bg='white'>
                <FlexContent flexDirection='column' m={3} px={4}>
                    {data.serviceSections.map((service, i) => {
                        return (
                            <Flex bg='lightteal' key={i} p={4} mb={4} flexDirection='column'>
                                <Heading fontSize={4} mb={2} id='1'>{service.name}</Heading>
                                <Heading fontSize={2} fontFamily='mono' mb={3}>{service.tagline}</Heading>
                                <TextNoFirstMarginP fontSize={2}><ReactMarkdown source={service.content}/></TextNoFirstMarginP>
                            </Flex>
                        )
                    })}
                </FlexContent>
            </Section>
        </div>
    )
}

export default Services
