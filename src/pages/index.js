import React from 'react'
import { useRouteData } from 'react-static'
import { Box, Flex, Heading, Image, Card, Text, Link } from 'rebass'

import { Section, FlexContent, FullHeightFlexContent, ClickableButton, ClickableLink } from 'components/rebass';
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import ReactMarkdown from 'react-markdown'
import MailingListForm from "../components/MailingListForm";
import styled from "styled-components";

import { colors } from '../theme'
import { PageTitle } from "../components/rebass";

const url = "https://ten-forward.us19.list-manage.com/subscribe/post?u=1eff7db017d8a9a0f3bc2f547&amp;id=08a107d735";

const ButtonWrapper = styled(Box)`
   text-align: right 
`

function Homepage() {
    const {data} = useRouteData()

    const PrimaryHero = (<FlexContent flexWrap='wrap' ml={[1,3,'auto']}>
        <Box width={[1, 1 / 2]} pt={3}>
            <FullHeightFlexContent
                flexDirection='column'
                justifyContent='center'>
                <Heading fontSize={6}
                         fontWeight='bold'
                         color='white'
                         pr={3}
                         mb={3}>
                    {data.title}
                </Heading>
                <Heading fontSize={4} mb={4} fontWeight='400' pr={4}
                         color='lightgray'>{data.titleTagline}</Heading>
                <ButtonWrapper pr={6} mb={[4, 0]}>
                    <Link href={data.ctaButton.ctaButtonLink}>
                        <ClickableButton variant='accent'
                                         fontSize={3}>{data.ctaButton.ctaButtonText}</ClickableButton>
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
    </FlexContent>)

    const ElevatorPitch = (<FlexContent flexDirection='row' alignItems='center' flexWrap='wrap'>
        <Image
            mx='auto'
            src={data.elevatorPitchImage}
            width={[0, 0.4]}
            borderRadius={8} />
        <Heading mb={3} mx='auto' fontSize={4} color='white' fontWeight='300' px={[3, 5]} width={[1, 3/6]}>
            <ReactMarkdown source={data.elevatorPitch}/>
        </Heading>
    </FlexContent>)

    const Services = (<FlexContent flexDirection='column' alignItems='center' justifyContent='space-around' mb={5}>
        <Heading m={4} color='darkgray' fontSize={5}>{data.ctaOne}</Heading>
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
                            <Heading mb={4} fontSize={3} fontFamily='mono'>{ block.name + ' /'}</Heading>
                            <Text lineHeight={4 / 3} fontSize={2} fontWeight='400' fontFamily='mono'>{block.text}</Text>
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
            <Section bg='anotherblue'>
                { PrimaryHero }
            </Section>

            <Section bg='brightorange'>
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
