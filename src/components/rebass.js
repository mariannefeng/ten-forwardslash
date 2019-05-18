import React from 'react'
import { Box, Flex, Button } from 'rebass'

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
    let css = checkProps(props, {cursor: 'pointer'})

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

export {Section, FlexContent, FullHeightFlexContent, ClickableButton};
