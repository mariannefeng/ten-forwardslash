import React from 'react'
import { useRouteData } from "react-static";
import ReactMarkdown from "react-markdown"
import { Box, Flex, Heading, Image, Text } from 'rebass'
import { MEASURE_OF_A_MAN } from 'components/text-overlay-filler'
import { Section, FullHeightFlexContent, TextNoFirstMarginP, PageTitle, BrandedMainHeading, BrandedSubHeading } from 'components/rebass';
import styled from "styled-components";
import {colors} from "../theme";

const ValuesHeader = styled(BrandedSubHeading)`
    border-left: 0.5rem solid ${colors.green};
    padding: 5px 1rem;
`

const AboutHeader = props =>
    <ValuesHeader
        {...props}
        fontSize={4}
        // py={2}
        fontFamily='mono'
        color='black'
        />
const AboutBlurb = props =>
    <TextNoFirstMarginP
        {...props}
        py={2}
        px={[2,3]}
        fontSize={3}
        />

const Founder = styled.div`
    border-left: 0.5rem solid ${colors.green};
    padding: 5px 1rem;
`

function About() {
    const { data } = useRouteData()
    return (
        <Section bg='white'>

                <FullHeightFlexContent  px={4} flex={1} mt={3} color='black'>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <PageTitle color='black'>{`<${data.title}>`}</PageTitle>
                        <Flex py={[2,0]}>
                            <Flex width={[1, 1/3]} justifyContent='flex-start'>
                                <AboutHeader>our mission</AboutHeader>
                            </Flex>
                        </Flex>
                        <AboutBlurb>{data.mission}</AboutBlurb>
                        <Flex py={[2,0]}>
                            <Box width={[0, 1/3]}/>
                            <Flex width={[1, 1/3]} justifyContent={['flex-start', 'center']}>
                                <AboutHeader>our vision</AboutHeader>
                            </Flex>
                        </Flex>
                        <AboutBlurb>{data.vision}</AboutBlurb>
                        <Flex py={[2,0]}>
                            <Box width={[0, 2/3]}/>
                            <Flex width={[1, 1/3]} justifyContent={['flex-start', 'flex-end']}>
                                <AboutHeader>our history</AboutHeader>
                            </Flex>
                        </Flex>
                        <AboutBlurb><ReactMarkdown source={data.history}/></AboutBlurb>

                        <PageTitle alignSelf='center' fontSize={5} my={4} color='black'>{`<${data.aboutTitle}>`}</PageTitle>
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
                                        <Founder>
                                            <BrandedSubHeading mb={2} fontSize={4}>{teamMember.name}</BrandedSubHeading>
                                            <BrandedMainHeading fontFamily='mono' mb={0} fontSize={3}>{teamMember.position}</BrandedMainHeading>
                                        </Founder>
                                        <Text fontSize={2}><ReactMarkdown source={teamMember.bio}/></Text>
                                    </Flex>
                                )
                            })}
                        </Flex>
                    </div>
                </FullHeightFlexContent>

        </Section>
    )
}

export default About
