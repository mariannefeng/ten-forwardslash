import React from 'react'
import { useRouteData } from "react-static";
import ReactMarkdown from "react-markdown"
import { Box, Flex, Heading, Image, Button, Card, Text } from 'rebass'

import { Section, FlexContent } from 'components/rebass';

const AboutHeader = props =>
    <Heading
        {...props}
        fontSize={4}
        width={[1, 1/3]}
        py={2}
        fontFamily='mono'
        textAlign='center'
        />
const AboutBlurb = props =>
    <Text
        {...props}
        py={2}
        fontSize={3}
        />

function About() {
    const { data } = useRouteData()
    console.log("data", data)
    return (
        <Section bg='minty'>
            <FlexContent flexDirection='column' m={3} px={4} flex={1}>
                <Heading alignSelf='center' fontSize={5} mb={4} color='teal'>{data.title}</Heading>
                <Flex>
                    <AboutHeader>our mission</AboutHeader>
                </Flex>
                <AboutBlurb>{data.mission}</AboutBlurb>
                <Flex>
                    <Box width={[0, 1/3]}/>
                    <AboutHeader>our vision</AboutHeader>
                </Flex>
                <AboutBlurb>{data.vision}</AboutBlurb>
                <Flex>
                    <Box width={[0, 2/3]}/>
                    <AboutHeader>our history</AboutHeader>
                </Flex>
                <AboutBlurb><ReactMarkdown source={data.history}/></AboutBlurb>
            </FlexContent>
        </Section>
    )
}

export default About
