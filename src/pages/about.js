import React from 'react'
import { useRouteData } from "react-static";
import ReactMarkdown from "react-markdown"
import { Box, Flex, Heading, Image, Button, Card, Text } from 'rebass'

import { Section } from 'components/rebass';

function About() {
    const { data } = useRouteData()
    console.log("data", data)
    return (
        <Section bg='minty'>
            <Flex justifyContent='center' flexDirection='column' alignItems='center' m={3}>
                <Heading fontSize={5}>{data.title}</Heading>
                <Box>
                    <ReactMarkdown source={data.history}/>
                </Box>
            </Flex>
        </Section>
    )
}

export default About
