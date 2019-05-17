import React from 'react'
import { useRouteData } from "react-static";
import { Box, Flex, Heading, Image, Button, Card, Text } from 'rebass'

import { Section } from 'components/rebass';

function About() {
    const { data } = useRouteData()
    console.log("data", data)
    return (
        <Section bg='minty'>
            <Heading>{data}</Heading>
        </Section>
    )
}

export default About
