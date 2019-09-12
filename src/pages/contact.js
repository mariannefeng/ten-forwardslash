import React from 'react'
import { useRouteData, withSiteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import { Heading, Box, Flex, Text, Link } from 'rebass'
import {
    FlexContent,
    FullHeightSection,
    OverlayText,
    PageTitle
} from '../components/rebass';
import styled from 'styled-components'
import SimpleMap from "../components/SimpleMap"

import theme, { colors } from '../theme'
import {TEN_FORWARD_STAMP} from "../components/text-overlay-filler";

const ContactText = styled(Text)`
    a {
        color: ${colors.darkgray};
    }
    
    a:hover {
        color: ${colors.mediumgray}
    }
    
    a i.fa-envelope {
        padding: 5px;
    }
`

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
            textAlign: 'left'
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
        <FullHeightSection bg='yellow' flexDirection='column'>
                <PageTitle color='black'>{`<${data.title}>`}</PageTitle>
                <SocialRow color='white'
                           width={1}
                           mb={[0, 2]}
                           px={0}
                           flexDirection={['column', 'row']}
                           justifyContent='space-evenly'
                           alignItems='center'>

                    <SocialBox>
                        <Text>{data.intro}</Text>
                        <ContactText fontFamily='mono' fontSize={2} width={1}>
                            <a href='mailto:info@ten-forward.com'>
                                <Text textAlign='center'><i className={`fas fa-envelope`}></i>info@ten-forward.com</Text>
                            </a>
                        </ContactText>
                    </SocialBox>

                    <SocialBox>
                        <Text>More of a social creature? Give us a shout on:</Text>
                        <Flex justifyContent='space-between' width={1/2}>
                            <ContactText fontSize={2}>
                                <Link href={`${siteData.social['insta'].url}`} target='_blank'>
                                    <i className={`fab fa-${siteData.social['insta'].faIcon} fa-lg`}></i>
                                </Link>
                            </ContactText>
                            <ContactText fontSize={2}>
                                <Link href={`${siteData.social['twitter'].url}`} target='_blank'>
                                    <i className={`fab fa-${siteData.social['twitter'].faIcon} fa-lg`}></i>
                                </Link>
                            </ContactText>
                        </Flex>
                    </SocialBox>

                </SocialRow>

                <FlexContent
                    width={1}
                    px={0}
                    flexDirection='column'
                    bg='lightgray'>
                    <ContactText fontSize={2} py={3} px={5} width={1} lineHeight={3/2}>
                        <ReactMarkdown
                            source={data.footer}
                            renderers={{link: LinkRenderer}}/>
                    </ContactText>
                    <SimpleMap />
                </FlexContent>
        </FullHeightSection>
    )
}

export default withSiteData(Contact)
