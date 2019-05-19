import React from 'react'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import { FullHeightFlexContent, FullHeightSection, PageHero } from '../components/rebass';
import { Heading } from 'rebass'

function Credits() {
    const { data } = useRouteData()
    return (
        <PageHero
            bg='lessintensepurple'
            color='white'
            title={data.title}
            blurb={data.content}/>
    )
}

export default Credits