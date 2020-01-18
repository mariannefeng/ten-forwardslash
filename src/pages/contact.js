import React from 'react'
import { useRouteData, withSiteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import { Heading, Box, Flex, Text, Link, Button } from 'rebass'

import {
    Label,
    Input,
    Select,
    Textarea,
} from '@rebass/forms/styled-components'

import {
    FlexContent,
    FullHeightSection,
    OverlayText,
    PageTitle, Section, Email, GrayLink, ArrowClickableButton
} from '../components/rebass';
import styled from 'styled-components'
import SimpleMap from "../components/SimpleMap"

import theme, { colors } from '../theme'
import NewsletterSignup from "../components/NewsletterSignup";

const SocialBox = props =>
    <Flex
        {...props}
        py={3}
        px={5}
        color='darkgray'
        width={[1]}
        mb={[2, 0]}
        flexDirection='column'
        justifyContent='space-evenly'
        alignItems='center'
        css={{
            minHeight: '150px',
            textAlign: 'left',
        }}
    />

function LinkRenderer(props) {
    return <a href={props.href} target="_blank">{props.children}</a>
}

function Contact(siteData) {
    const { data } = useRouteData()

    return (
        <Section bg='white' flexDirection='column'>
                <PageTitle color='black'  mt={3} >{`<${data.title}>`}</PageTitle>
                    <FlexContent
                        py={3}
                        px={[3, 5]}
                        color='darkgray'
                        width={[1]}
                        mb={[2, 0]}
                        flexDirection='column'
                        justifyContent='space-evenly'
                        alignItems='center'
                        css={{
                            minHeight: '150px',
                            textAlign: 'left',
                        }}>
                        <Text>{data.intro}</Text>
                        <Box width={1}
                            as='form'
                            data-netlify='true'
                            name='contact'
                            py={3}>
                            <Flex mb={2}
                                  justifyContent='space-between'
                                  flexWrap='wrap'>
                                <Box width={[1, .48]}>
                                    <Label htmlFor='name'>Name</Label>
                                    <Input id='name' name='name'/>
                                </Box>
                                <Box width={[1, .48]}>
                                    <Label htmlFor='email'>Email</Label>
                                    <Input id='email' name='email'/>
                                </Box>
                            </Flex>
                            <Flex flexDirection='column'>
                                <Box my={[0, 1]}>
                                    <Label htmlFor='message'>Message</Label>
                                    <Textarea id='message' name='message'/>
                                </Box>
                                <Box mb={[4, 0]} width={1} textAlign='right'>
                                    <ArrowClickableButton variant='transparent'
                                                          color='black'
                                                          type='submit'
                                                          width={[1/4, 1/5]}
                                                          buttonText='submit'/>
                                </Box>
                            </Flex>
                        </Box>

                        <Flex width={[1, 3/4, 1/2]} fontSize={[2]}>
                            <Text>or shoot us an email at: </Text>
                            <Email mailto='info@ten-forward.com'/>
                        </Flex>
                    </FlexContent>

                <FlexContent
                    width={1}
                    px={0}
                    mb={4}
                    flexDirection='column'>
                    <GrayLink fontSize={2} py={3} px={[3, 5]} width={1} lineHeight={3/2}>
                        <ReactMarkdown
                            source={data.footer}
                            renderers={{link: LinkRenderer}}/>
                    </GrayLink>
                    <SimpleMap />
                </FlexContent>
                <Section bg='yellow'>
                    <NewsletterSignup cta='want updates?'/>
                </Section>
        </Section>
    )
}

export default withSiteData(Contact)
