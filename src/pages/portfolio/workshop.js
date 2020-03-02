import React from 'react'
import { useRouteData } from "react-static"
import ReactMarkdown from "react-markdown"
import {Flex, Heading, Image, Text, Box} from 'rebass'

import { Section, FlexContent, BrandedSubHeading, BrandedMainHeading, StyledBrandedSubHeading } from '../../components/rebass';


function Services() {
    const { data } = useRouteData()

    return (
        <Section bg='white' flexDirection='column' my={3} px={[3,4,6]}>
            <BrandedMainHeading textAlign='center' alignSelf='center' fontSize={[4,5]} my={4}>{data.title}</BrandedMainHeading>


            <StyledBrandedSubHeading fontSize={[3, 4]}>{data.overview.title}</StyledBrandedSubHeading>
            <Box>
                <ReactMarkdown source={data.overview.description} />
                <p>{data.overview.firstSession.description}</p>
            </Box>
            <FlexContent flexDirection={['column','row']} alignItems='center' py={[3,4]}>
                {data.overview.firstSession.slideScreenshots.map((screenshot, i) => {
                    return <Image
                        key={`screenshot-${i}`}
                        mx='auto'
                        src={screenshot.image}
                        width={[1, 0.4]}/>
                })}
            </FlexContent>

            <Text py={[3,4]}>{data.overview.secondSession.description}</Text>
            <Image
                src={data.overview.secondSession.image}
                width={1}/>
            {data.sections.map((section, i) => {
                return <WorkshopSection key={`workshop-section-${i}`} {...section} />
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
