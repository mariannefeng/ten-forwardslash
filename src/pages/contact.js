import React from 'react'
import { useRouteData, withSiteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import { Heading, Box, Flex, Text, Link } from 'rebass'
import {
    FlexContent,
    FullHeightSection,
    OverlayText,
    PageTitle, Section, Email, GrayLink
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
        bg='lightgray'
        color='darkgray'
        width={[1, 1/2]}
        mb={[2, 0]}
        flexDirection='column'
        justifyContent='space-evenly'
        alignItems='center'
        css={{
            minHeight: '150px',
            textAlign: 'left',
        }}
    />

const SocialRow = styled(FlexContent)`
    @media (min-width: ${theme.breakpoints[0]}) {
       div:first-child {
            margin-right: 4px;
       }
    
        div:last-child {
            margin-left: 4px;    
        } 
    }   
`

function LinkRenderer(props) {
    return <a href={props.href} target="_blank">{props.children}</a>
}

function Contact(siteData) {
    const { data } = useRouteData()

    return (
        <Section bg='white' flexDirection='column'>
                <PageTitle color='black'  mt={3} >{`<${data.title}>`}</PageTitle>
                <SocialRow color='white'
                           width={1}
                           mb={[0, 2]}
                           px={0}
                           flexDirection={['column', 'row']}
                           justifyContent='space-evenly'
                           alignItems='center'>

                    <SocialBox>
                        <Text>{data.intro}</Text>
                        <Email mailto='info@ten-forward.com'/>
                    </SocialBox>

                    <SocialBox>
                        <Text>More of a social creature? Give us a shout on:</Text>
                        <Flex justifyContent='space-between' width={1/2}>
                            <GrayLink fontSize={2}>
                                <Link href={`${siteData.social['insta'].url}`} target='_blank'>
                                    <i className={`fab fa-${siteData.social['insta'].faIcon} fa-lg`}></i>
                                </Link>
                            </GrayLink>
                            <GrayLink fontSize={2}>
                                <Link href={`${siteData.social['twitter'].url}`} target='_blank'>
                                    <i className={`fab fa-${siteData.social['twitter'].faIcon} fa-lg`}></i>
                                </Link>
                            </GrayLink>
                        </Flex>
                    </SocialBox>

                </SocialRow>

                <FlexContent
                    width={1}
                    px={0}
                    mb={4}
                    flexDirection='column'
                    bg='lightgray'>
                    <GrayLink fontSize={2} py={3} px={5} width={1} lineHeight={3/2}>
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
