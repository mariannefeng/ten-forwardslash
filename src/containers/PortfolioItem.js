import React from 'react'
import { useRouteData } from 'react-static'
import { Box } from 'rebass'

import { BrandedMainHeading, Section, StyledBrandedSubHeading } from '../components/rebass'
import {LinkRenderer, ImageRenderer, BlockquoteRenderer} from "../components/Markdown"
import ReactMarkdown from "react-markdown/with-html"

function PortfolioItem() {
    const { data } = useRouteData()
    return (
        <Section bg='white' flexDirection='column' my={3} px={[3,4,6]}>
            <BrandedMainHeading textAlign='center' alignSelf='center' fontSize={[4,5]} my={4}>{data.title}</BrandedMainHeading>
            <Box>
                <ReactMarkdown
                renderers={{
                    link: LinkRenderer,
                    heading: StyledBrandedSubHeading,
                    image: ImageRenderer,
                    blockquote: BlockquoteRenderer
                }}
                escapeHtml={false}
                source={data.content}/>
            </Box>
        </Section>
)
}

export default PortfolioItem
