import React from 'react'
import {Box, Flex, Button, Text} from 'rebass'
import styled from "styled-components";

const Section = props =>
    <Box
        {...props}
        py={[2, 4]}
    />

const FlexContent = props => {
    let css = checkProps(props, {maxWidth: '900px'})

    return <Flex
        {...props}
        m='auto'
        px={[3,1,0]}
        css={css}
    />
}

const FullHeightFlexContent = props => {
    let css = checkProps(props, {height: '100%'})

    return <FlexContent
        {...props}
        css={css}
    />
}

const ClickableButton = props => {
    let css = checkProps(props, {
        cursor: 'pointer'
    })

    return <Button
        {...props}
        css={css}
    />
}

function checkProps (props, css) {
    if (props.hasOwnProperty('css')) {
        css = {...css, ...props.css}
        delete props.css
    }

    return css
}

// todo: review -- idk a good name for this
const TextNoFirstMarginP = styled(Text)`
p:first-child {
    margin-block-start: 0;
}
`

export { Section, FlexContent, FullHeightFlexContent, ClickableButton, TextNoFirstMarginP};
