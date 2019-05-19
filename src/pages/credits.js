import React from 'react'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import { FullHeightFlexContent, FullHeightSection } from '../components/rebass';
import { Heading } from 'rebass'

function Credits() {
    const { data } = useRouteData()

    return (
        <FullHeightSection bg='brightpurple'>
            <Heading>{data.title}</Heading>
            <ReactMarkdown source={data.content}/>
        </FullHeightSection>
    )
}

export default Credits