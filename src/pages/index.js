import React from 'react'
import { useRouteData } from 'react-static'
import { Box, Flex, Image, Card, Text, Link } from 'rebass'
import {
    Section,
    FlexContent,
    FullHeightFlexContent,
    BrandedMainHeading,
    BrandedSubHeading,
    ArrowClickableButton,
    OverlayText,
} from '../components/rebass'
import ReactMarkdown from 'react-markdown'
import NewsletterSignup from '../components/NewsletterSignup'
import GreyBlocksWithIcon from '../components/GreyBlocksWithIcon'
import styled from "styled-components";
import { colors } from "../theme"
import { MEASURE_OF_A_MAN } from '../components/text-overlay-filler'

const ButtonWrapper = styled(Box)`
   text-align: left 
`

function Homepage() {
    const {data} = useRouteData()


    const PrimaryHero = (
        <Box width={1} pb={[0,4]} >
            <OverlayText color='blue' overlayFontSize='10px' content={MEASURE_OF_A_MAN}>
                <FlexContent flexWrap='wrap' ml={[1,3,'auto']}>
                    <Box width={[1, 1 / 2]} pt={3}>
                        <FullHeightFlexContent
                            flexDirection='column'
                            justifyContent='center'>
                            <BrandedMainHeading fontSize={[6, 6]}
                                     fontWeight='bold'
                                     color='green'
                                     pr={3}
                                     mb={3}>
                                {data.title}
                            </BrandedMainHeading>
                            <Text fontSize={4} mb={4} fontWeight='400' pr={4}
                                     color='white'>{data.titleTagline}</Text>
                            <ButtonWrapper pr={[1,6]} mb={[4, 0]}>
                                <Link href={data.ctaButton.ctaButtonLink}>
                                    <ArrowClickableButton variant='transparent' fontSize={3} color='orange' buttonText={data.ctaButton.ctaButtonText} />
                                </Link>
                            </ButtonWrapper>
                        </FullHeightFlexContent>
                    </Box>
                    <Flex alignItems='center' width={[0, 1 / 2]}>
                        <Image
                            px={2}
                            mx='auto'
                            src={data.ctaImage}
                            mt={[5,0]}
                            width={1}
                            borderRadius={8}
                        />
                    </Flex>
                </FlexContent>
            </OverlayText>
        </Box>)

    const ElevatorPitch = (<FlexContent flexDirection='row' alignItems='center' flexWrap='wrap'>
        <Image
            mx='auto'
            src={data.elevatorPitchImage}
            width={[0, 0.4]}
            borderRadius={8} />
        <Text mb={3} mx='auto' fontSize={4} color='black' fontWeight='500' px={[3, 5]} width={[1, 3/6]}>
            <ReactMarkdown source={data.elevatorPitch}/>
        </Text>
    </FlexContent>)

    const Services = (<FlexContent flexDirection='column' alignItems='center' justifyContent='space-around' mb={5}>
        <BrandedSubHeading m={4} color='black' fontSize={5}>{data.ctaOne}</BrandedSubHeading>
        <GreyBlocksWithIcon data={data.blocks}/>
    </FlexContent>)


    return (
        <div>
            <Section py={0} bg='black'>
                { PrimaryHero }
            </Section>

            <Section bg='green'>
                { ElevatorPitch }
            </Section>

            <Section bg='white'>
                { Services }
            </Section>

            <Section bg='yellow'>
                <NewsletterSignup cta={data.ctaTwo}/>
            </Section>

        </div>
    )
}

export default Homepage
