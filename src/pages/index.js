import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import { Box, Flex, Heading, Image, Card, Text } from 'rebass'

import { Section, FlexContent, FullHeightFlexContent, ClickableButton } from 'components/rebass';
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import ReactMarkdown from 'react-markdown'
import MailingListForm from "../components/MailingListForm";
import styled from "styled-components";

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
                            <Heading fontSize={4} mb={4} fontWeight='300' pr={4}
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

            <Section bg='orange'>
                <FlexContent flexDirection='column' alignItems='center'>
                    <Heading mb={3} fontSize={4} fontWeight='normal' px={5}>
                        <ReactMarkdown source={data.elevatorPitch}/>
                    </Heading>
                    <Image
                        mx='auto'
                        src={data.elevatorPitchImage}
                        width={3/5}
                        borderRadius={8} />
                </FlexContent>
            </Section>

            <Section bg='white'>
                <FlexContent flexDirection='column' alignItems='center' justifyContent='space-around'>
                    <Heading mb={3} color='darkblue' fontSize={5}>{data.ctaOne}</Heading>
                    <Flex flexWrap='wrap' justifyContent='space-around'>
                        {/*todo: if this is ever gonna be more than 3, we should do a length check*/}
                        {data.blocks.map((block, i) => {
                            return (
                                <Card bg='lightyellow'
                                      width={1}
                                      key={i}
                                      p={3}
                                      my={3}
                                    // border={`1px solid ${colors.mediumorange}`}
                                      borderRadius={3}>
                                    <Heading mb={3} fontSize={3}>{block.name}</Heading>
                                    <Text lineHeight={4 / 3}>{block.text}</Text>
                                </Card>
                            )
                        })}
                    </Flex>
                </FlexContent>
            </Section>

            <Section bg='minty'>
                <FullHeightFlexContent flexDirection='column' alignItems='center'>
                    <Heading fontSize={4} fontWeight='normal'>{data.ctaTwo}</Heading>
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
