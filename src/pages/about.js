import React from 'react'
import { useRouteData } from "react-static";
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import { Box, Flex, Heading, Image, Button, Card, Text } from 'rebass'
import { MEASURE_OF_A_MAN, MARIANNE_TEST } from 'components/text-overlay-filler'
import { Section, FlexContent, FullHeightFlexContent, TextNoFirstMarginP, PageTitle, OverlayText } from 'components/rebass';

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
    <TextNoFirstMarginP
        {...props}
        py={2}
        px={[2,3]}
        fontSize={3}
        />

function About() {
    const { data } = useRouteData()
    return (
        <Section bg='black'>
            <OverlayText color='blue' style={{fontSize: "10px", margin: "auto"}} content={MEASURE_OF_A_MAN}>
                <FullHeightFlexContent  px={4} flex={1} mt={3} color='white'>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <PageTitle color='minty'>{data.title}</PageTitle>
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

                        <PageTitle alignSelf='center' fontSize={5} my={4} color='minty'>{data.aboutTitle}</PageTitle>
                        <Flex flexWrap='wrap' justifyContent='space-around'>
                            {/*todo: this works for only two, i realize we should prob handle board members
                                differently w/ a different section*/}
                            {data.team.map((teamMember, i) => {
                                return (
                                    <Flex width={[1, 0.45]} key={i} p={2} flexDirection='column'>
                                        <Image
                                            alignSelf='center'
                                            mx='auto'
                                            src={teamMember.image}
                                            width={[3/4, 2/3, 1/2]}
                                            height={['150px', '250px']}
                                            borderRadius={8}
                                            css={{objectFit: 'contain', maxHeight: '150px'}}
                                            mb={3}
                                        />
                                        <Heading mb={2} fontSize={4}>{teamMember.name}</Heading>
                                        <Heading fontFamily='mono' mb={2} fontSize={3}>{teamMember.position}</Heading>
                                        <Text fontSize={2}><ReactMarkdown source={teamMember.bio}/></Text>
                                    </Flex>
                                )
                            })}
                        </Flex>
                    </div>
                </FullHeightFlexContent>
            </OverlayText>
        </Section>
    )
}

export default About
