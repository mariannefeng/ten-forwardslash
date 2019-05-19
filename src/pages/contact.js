import React from 'react'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import { Heading, Box } from 'rebass'
import { FlexContent, FullHeightFlexContent, FullHeightSection } from '../components/rebass';
import styled from 'styled-components'
import SimpleMap from "../components/SimpleMap"

import { colors } from '../theme'

const CustomWords = styled(Heading)`
    a {
        color: white;
    }
    
    a:hover {
        color: ${colors.lightgray}
    }
`


function Contact() {
    const { data } = useRouteData()

    return (
        <FullHeightSection bg='mediumgray'>
            <FullHeightFlexContent flexDirection='column'
                                   mt={0}
                                   color='white'
                                   justifyContent='space-evenly'
                                   alignItems='center'>

                <CustomWords fontSize={3}>
                    <ReactMarkdown source={data.intro}/>
                </CustomWords>

                <FlexContent alignItems='flex-start' flexWrap='wrap' mt={[0, 5]}>
                    <CustomWords fontSize={2} p={3} width={[1, 1/4]} lineHeight={3/2}>
                        <ReactMarkdown source={data.footer}/>
                    </CustomWords>
                    <Box width={[1,2/3]}>
                        <SimpleMap />
                    </Box>
                </FlexContent>
            </FullHeightFlexContent>

        </FullHeightSection>
    )
}

export default Contact
