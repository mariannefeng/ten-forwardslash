import React from 'react'
import { useRouteData } from "react-static"
import ReactMarkdown from "react-markdown"
import {Flex, Heading, Image, Text, Box} from 'rebass'

import { Section, FlexContent, BrandedSubHeading, BrandedMainHeading, StyledBrandedSubHeading } from '../../components/rebass';


function Services() {
    const { data } = useRouteData()

    return (
        <Section bg='white' flexDirection='column' my={3} px={[0,4,6]}>
            <BrandedMainHeading textAlign='center' alignSelf='center' fontSize={[4,5]} my={4}>Wordpress Workshop with 501 Commons</BrandedMainHeading>
            <StyledBrandedSubHeading fontSize={[3, 4]}>The overview</StyledBrandedSubHeading>
            <Box>
                <p>In November 2019, Ten-Forward presented a 2-hour workshop as a part of 501 Commons’ 501 Talks
                    Tech series on selecting WordPress plugins. We developed this workshop with an understanding
                    that many nonprofits use WordPress for their sites, and most are extended with various plugins
                    - of which there are over 50,000 overwhelming options.</p>
                <p>The first hour of this session focused on understanding use cases and requirements as a
                    function in plugin selection, as well as some common research practices to employ when
                    deciding between ones with similar functionality. By talking through the plugin selection
                    process, we helped nonprofit employees to understand the value of use cases in requirements
                    - a skill not limited to plugins. </p>
            </Box>
            <FlexContent flexDirection={['column','row']} alignItems='center' py={[3,4]}>
                <Image
                    mx='auto'
                    src='/images/uploads/Plugins_When.png'
                    width={[1, 0.4]}/>
                <Image
                    mx='auto'
                    src='/images/uploads/Plugins_Which_one.png'
                    width={[1, 0.4]}/>
            </FlexContent>
            <FlexContent flexDirection='column'>
                <Text py={[3,4]}>The second hour became a working session where the
                    attendees could ask us specific questions related to their WordPress installations.</Text>
                <Image
                    src='/images/uploads/marianne-wp-workshop.jpg'
                    width={1}/>
            </FlexContent>
            {data.sections.map((section) => {
                return <WorkshopSection {...section} />
            })}
        </Section>
    )
}

const WorkshopSection = (props) => (
    <div>
        <StyledBrandedSubHeading fontSize={[3, 4]} mt={4}>{props.title}</StyledBrandedSubHeading>
        <ReactMarkdown source={props.content}/>
    </div>
)

export default Services
