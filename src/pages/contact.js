import React from 'react'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import { Heading, Box, Flex, Text } from 'rebass'
import {ClickableLink, FlexContent, FullHeightFlexContent, FullHeightSection} from '../components/rebass';
import styled from 'styled-components'
import SimpleMap from "../components/SimpleMap"

import { colors } from '../theme'

const ContactText = styled(Text)`
    a {
        color: ${colors.darkgray};
    }
    
    a:hover {
        color: ${colors.mediumgray}
    }
`

const SocialBox = props =>
    <Flex
        {...props}
        padding={3}
        bg='lightgray'
        color='darkgray'
        width={1/2}
        flexDirection='column'
        justifyContent='space-evenly'
        alignItems='center'
        css={{
            minHeight: '150px',
            textAlign: 'center'
        }}
    />

const SocialRow = styled(FlexContent)`
    div:first-child {
        margin-right: 4px;
    }
    
    div:last-child {
        margin-left: 4px;    
    }    
`

function Contact() {
    const { data } = useRouteData()


    return (
        <FullHeightSection bg='mediumgray' flexDirection='column'>
            <SocialRow color='white'
                         width={1}
                         mb={2}
                         justifyContent='space-evenly'
                         alignItems='center'>

                <SocialBox>
                    <Text>24 Hour Response Guaranteed. Send us an email at:</Text>
                    <Heading fontFamily='mono' fontSize={2}> <i className={`fas fa-envelope`}></i> info@ten-forward.com</Heading>
                </SocialBox>

                <SocialBox>
                    <Text>More of a social creature? Give us a shout on:</Text>
                    <Flex justifyContent='space-between' width={1/2}>
                        <Heading fontSize={2}> <i className={`fab fa-instagram fa-lg`}></i></Heading>
                        <Heading fontSize={2}> <i className={`fab fa-twitter fa-lg`}></i></Heading>
                    </Flex>
                </SocialBox>

            </SocialRow>

            <FlexContent width={1} flexDirection='column' bg='lightgray'>
                <ContactText fontSize={2} p={3} width={1} lineHeight={3/2}>
                    <ReactMarkdown source={data.footer}/>
                </ContactText>
                <SimpleMap />
            </FlexContent>

        </FullHeightSection>
    )
}

export default Contact