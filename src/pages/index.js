import React from 'react'
import { useRouteData } from 'react-static'
import { Box, Flex, Heading, Image, Card, Text, Link } from 'rebass'

import { Section, FlexContent, FullHeightFlexContent, ClickableButton, ClickableLink, BrandedMainHeading, BrandedSubHeading, ArrowClickableButton, OverlayText, PageTitle } from 'components/rebass';
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import ReactMarkdown from 'react-markdown'
import MailingListForm from "../components/MailingListForm";
import styled from "styled-components";

import { MEASURE_OF_A_MAN } from 'components/easteregg-backgrounds'

const url = "https://ten-forward.us19.list-manage.com/subscribe/post?u=1eff7db017d8a9a0f3bc2f547&amp;id=08a107d735";

const ButtonWrapper = styled(Box)`
   text-align: right 
`

function Homepage() {
    const {data} = useRouteData()

    const PrimaryHero = (
        <div style={{position: "relative", width: "100%"}} >
            <OverlayText>{MEASURE_OF_A_MAN}</OverlayText>
            <FlexContent flexWrap='wrap' ml={[1,3,'auto']}>
                <Box width={[1, 1 / 2]} pt={3} style={{zIndex: 3}}>
                    <FullHeightFlexContent
                        flexDirection='column'
                        justifyContent='center'>
                        <BrandedMainHeading fontSize={6}
                                 fontWeight='bold'
                                 color='green'
                                 pr={3}
                                 mb={3}>
                            {data.title}
                        </BrandedMainHeading>
                        <Text fontSize={4} mb={4} fontWeight='400' pr={4}
                                 color='white'>{data.titleTagline}</Text>
                        <ButtonWrapper pr={6} mb={[4, 0]}>
                            <Link href={data.ctaButton.ctaButtonLink}>
                                <ArrowClickableButton variant='transparent' fontSize={3} color='orange' buttonText={data.ctaButton.ctaButtonText} />
                            </Link>
                        </ButtonWrapper>
                    </FullHeightFlexContent>
                </Box>
                <Flex alignItems='center' width={[0, 1 / 2]} style={{zIndex: 3}}>
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
        </div>)

    const ElevatorPitch = (<FlexContent flexDirection='row' alignItems='center' flexWrap='wrap'>
        <Image
            mx='auto'
            src={data.elevatorPitchImage}
            width={[0, 0.4]}
            borderRadius={8} />
        <Text mb={3} mx='auto' fontSize={4} color='white' fontWeight='400' px={[3, 5]} width={[1, 3/6]}>
            <ReactMarkdown source={data.elevatorPitch}/>
        </Text>
    </FlexContent>)

    const Services = (<FlexContent flexDirection='column' alignItems='center' justifyContent='space-around' mb={5}>
        <BrandedSubHeading m={4} color='darkgray' fontSize={5}>{data.ctaOne}</BrandedSubHeading>
        <Flex flexWrap='wrap' justifyContent='space-around'>
            {/*todo: if this is ever gonna be more than 3, we should do a length check*/}
            {data.blocks.map((block, i) => {
                return (
                    <ClickableLink
                        key={i}
                        href={block.path}
                        color='black'>
                        <Card width={1}
                              p={4}
                              my={4}
                              bg='codebggray'>
                            <BrandedMainHeading mb={4} fontSize={3}>{ block.name + ' /'}</BrandedMainHeading>
                            <Text lineHeight={4 / 3} fontSize={2} fontWeight='400' fontFamily='sans'>{block.text}</Text>
                        </Card>
                    </ClickableLink>
                )
            })}
        </Flex>
    </FlexContent>)

    const NewsletterSignup = (<FullHeightFlexContent flexDirection='column' alignItems='center' width={[5/7, 1/4]}>

        <PageTitle color='white'>{data.ctaTwo}</PageTitle>

        <MailchimpSubscribe url={url}
                            render={({subscribe, status, message}) => (
                                <MailingListForm
                                    status={status}
                                    message={message}
                                    onValidated={formData => subscribe(formData)}
                                />
                            )}/>
    </FullHeightFlexContent>)

    return (
        <div>
            <Section bg='black'>
                { PrimaryHero }
            </Section>

            <Section bg='yellow'>
                { ElevatorPitch }
            </Section>

            <Section bg='white'>
                { Services }
            </Section>

            <Section bg='darkerteal'>
                { NewsletterSignup }
            </Section>

        </div>
    )
}

export default Homepage
