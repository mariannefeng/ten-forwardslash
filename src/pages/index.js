import React from 'react'
import { useRouteData } from 'react-static'
import { Box, Flex, Heading, Image, Card, Text, Link } from 'rebass'

import { Section, FlexContent, FullHeightFlexContent, ClickableButton, ClickableLink } from 'components/rebass';
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import ReactMarkdown from 'react-markdown'
import MailingListForm from "../components/MailingListForm";
import styled from "styled-components";

import { colors } from '../theme'

const url = "https://ten-forward.us19.list-manage.com/subscribe/post?u=1eff7db017d8a9a0f3bc2f547&amp;id=08a107d735";

const ButtonWrapper = styled(Box)`
   text-align: right 
`

function Homepage() {
    const {data} = useRouteData()

    return (
        <div>
            <Section bg='anotherblue'>
                <FlexContent flexWrap='wrap'>
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
                            <ButtonWrapper pr={6}>
                                <Link to={data.ctaButton.ctaButtonLink}>
                                    <ClickableButton variant='accent'
                                                     fontSize={3}>{data.ctaButton.ctaButtonText}</ClickableButton>
                                </Link>
                            </ButtonWrapper>
                        </FullHeightFlexContent>
                    </Box>
                    <Flex alignItems='center' width={[1, 1 / 2]}>
                        <Image
                            mx='auto'
                            src={data.ctaImage}
                            width={1}
                            borderRadius={8}
                        />
                    </Flex>
                </FlexContent>
            </Section>

            <Section bg='brightorange'>
                <FlexContent flexDirection='row' alignItems='center'>
                    <Image
                        mx='auto'
                        src={data.elevatorPitchImage}
                        width={[1, 3/6]}
                        borderRadius={8} />
                    <Heading mb={3} fontSize={4} color='white' fontWeight='300' px={5}>
                        <ReactMarkdown source={data.elevatorPitch}/>
                    </Heading>

                </FlexContent>
            </Section>

            <Section bg='white'>
                <FlexContent flexDirection='column' alignItems='center' justifyContent='space-around' mb={5}>
                    <Heading m={5} color='darkgray' fontSize={5}>{data.ctaOne}</Heading>
                    <Flex flexWrap='wrap' justifyContent='space-around'>
                        {/*todo: if this is ever gonna be more than 3, we should do a length check*/}
                        {data.blocks.map((block, i) => {
                            return (
                                <ClickableLink href={block.path} color='black'>
                                    <Card width={1}
                                                   key={i}
                                                   p={4}
                                                   my={3}
                                                   bg='codebggray'>
                                        <Heading mb={4} fontSize={4} fontFamily='mono'>{ block.name + '/'}</Heading>
                                        <Text lineHeight={4 / 3} fontSize={2} fontWeight='400'>{block.text}</Text>
                                    </Card>
                                </ClickableLink>
                            )
                        })}
                    </Flex>
                </FlexContent>
            </Section>

            <Section bg='teal'>
                <FullHeightFlexContent flexDirection='column' alignItems='center'>
                    <Heading fontSize={4} fontWeight='normal' color='white'>{data.ctaTwo}</Heading>
                    <div>
                        <MailchimpSubscribe url={url}
                                            render={({subscribe, status, message}) => (
                                                <MailingListForm
                                                    status={status}
                                                    message={message}
                                                    onValidated={formData => subscribe(formData)}
                                                />
                                            )}/>
                    </div>
                </FullHeightFlexContent>
            </Section>

        </div>
    )
}

export default Homepage
