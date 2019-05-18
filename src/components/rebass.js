import React from 'react'
import { Box, Flex, Button } from 'rebass'

const Section = props =>
    <Box
        {...props}
        py={[2, 4]}
    />

const FlexContent = props => {
    let css;
    if (props.hasOwnProperty('css')) {
        css = {...{maxWidth: '900px'}, ...props.css}
        delete props.css
    }
    return <Flex
        {...props}
        m='auto'
        css={css}
    />
}

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
