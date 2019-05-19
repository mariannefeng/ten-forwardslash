import React from 'react'
import { Box, Flex, Button, Text, Link } from 'rebass'
import styled from "styled-components";
import theme, { colors } from '../theme'

const Section = props => {
    let css = checkProps(props, {minHeight: '500px'})

    return < Flex
        py = {[2, 4]}
        css = {css}
        {...props}
    />

}

const FullHeightSection = props => {
    let css = checkProps(props, {minHeight: '100vh'})

    return < Section
        py = {[2, 4]} //TODO: if this inherits from Section, do we need to set py?
        css = {css}
        {...props}
    />

}

const FlexContent = props => {
    let css = checkProps(props, {maxWidth: '950px'})

    return <Flex
        m='auto'
        px={[3,2,1]}
        css={css}
        {...props}

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
        cursor: 'pointer',
        fontFamily: 'Consolas, monospace',
        ':focus':  {
            outline: 'none'
        }
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

const ClickableLink = styled(Link)`
    text-decoration: none; 
    cursor: pointer;
    color: ${colors.darkgray};
    :hover {
        color: ${colors.mediumgray}; 
    }
`

const PrettyInput = styled.input`
    font-size: 18px;
    padding: 10px;
    width: 93%; //todo: review -- width 100% was growing past the parent div 
    font-family: ${theme.fonts['sans']}; 
    :focus {
        outline: none;
    }
`


export { Section, FlexContent, FullHeightFlexContent, ClickableButton, TextNoFirstMarginP, ClickableLink, PrettyInput, FullHeightSection };
