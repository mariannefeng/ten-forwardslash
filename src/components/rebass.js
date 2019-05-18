import React from 'react'
import { Box, Flex, Button } from 'rebass'

const Section = props =>
    <Box
        {...props}
        py={[2, 4]}
    />

const FlexContent = props =>
    <Flex
        {...props}
        width='900px'
        m='auto'
    />

const FullHeightFlexContent = props =>
    <FlexContent
        {...props}
        css={{height: "100%"}}
    />

const ClickableButton = props =>
    <Button
        {...props}
        css={{cursor: "pointer"}}
    />

export {Section, FlexContent, FullHeightFlexContent, ClickableButton};
