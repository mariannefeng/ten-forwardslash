import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import { Box, Flex, Heading, Image, Card, Text } from 'rebass'

import { Section, FlexContent, FullHeightFlexContent, ClickableButton } from 'components/rebass';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://ten-forward.us19.list-manage.com/subscribe/post?u=1eff7db017d8a9a0f3bc2f547&amp;id=08a107d735";


function Homepage() {
    const { data } = useRouteData()

    return (
        <div>
            <Section bg='minty'>
                <FlexContent flexWrap='wrap'>
                    <Box width={[1, 1/2]} pt={3}>
                        <Flex css={{height: '100%'}} alignItems='flex-end' p={4}>
                            <div>
                                <Heading fontSize={6} fontWeight='bold' mb={3}>{data.title}</Heading>
                                <Heading fontSize={2} fontFamily='mono' mb={4}>{data.titleTagline}</Heading>
                                <Link to={data.ctaButton.ctaButtonLink}>
                                    <ClickableButton variant='accent'>{data.ctaButton.ctaButtonText}</ClickableButton>
                                </Link>
                            </div>
                        </Flex>
                    </Box>
                    <Flex alignItems='center' width={[1, 1/2]}>
                        <Image
                            mx='auto'
                            src={data.ctaImage}
                            width={1}
                            borderRadius={8}
                        />
                    </Flex>
                </FlexContent>
            </Section>

            <Section bg='teal'>
                <FlexContent flexDirection='column' alignItems='center'>
                    <Heading mb={3} color='darkblue' fontSize={4} fontWeight='normal' px={5}>{data.elevatorPitch}</Heading>
                </FlexContent>
            </Section>
            <Section bg='lightgray'>
                <FlexContent flexDirection='column' alignItems='center' justifyContent='space-around'>
                    <Heading mb={3} color='teal' fontSize={5}>{data.ctaOne}</Heading>
                    <Flex flexWrap='wrap'  justifyContent='space-around'>
                        {/*todo: if this is ever gonna be more than 3, we should do a length check*/}
                        {data.blocks.map((block, i) => {
                            return (
                                <Card bg='white' width={[1, 1/4]} key={i} p={2} m={1}>
                                    <Heading fontFamily='mono' mb={3} fontSize={3}>{block.name}</Heading>
                                    <Text>{block.text}</Text>
                                </Card>
                            )
                        })}
                    </Flex>
                </FlexContent>
            </Section>
            <Section bg='darkblue'>
                <FullHeightFlexContent justifyContent='center'>
                    <Heading fontSize={4} fontWeight='normal' color='white'>{data.ctaTwo}</Heading>
                    <MailchimpSubscribe url={url} />
                </FullHeightFlexContent>
            </Section>

        </div>
    )
}

export default Homepage
