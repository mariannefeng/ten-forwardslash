import React from 'react'
import { Box, Flex, Button } from 'rebass'

function mergeCssProps(props, css) {
    if (props.hasOwnProperty('css')) {
        css = {...css, ...props.css}
        delete props.css
    }
    return css
}

const Section = props =>
    <Box
        {...props}
        py={[2, 4]}
    />

const FlexContent = props => {
    let cssProps = mergeCssProps(props, {maxWidth: '900px'})
    return <Flex
        {...props}
        m='auto'
        css={cssProps}
    />
}

const FullHeightFlexContent = props => {
    let cssProps = mergeCssProps(props, {height: "100%"})
    return <FlexContent
        {...props}
        css={cssProps}
    />
}

const ClickableButton = props => {
    let cssProps = mergeCssProps(props, {cursor: "pointer"})
    return <Button
        {...props}
        css={cssProps}
    />
}

export {Section, FlexContent, FullHeightFlexContent, ClickableButton};
