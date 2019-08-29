import React, { useState } from 'react'
import { Box, Flex, Button, Text, Link, Heading } from 'rebass'
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactMarkdown from 'react-markdown'

import theme, { colors } from '../theme'

const BrandedMainHeading = styled(Heading)`
    text-transform: lowercase;
    font-family: "OCR A Extended", monospace;
`

const BrandedSubHeading = styled(Heading)`
    text-transform: uppercase;
    font-family: 'Ubuntu Mono', monospace;
`

//fixme: since changing to using psuedoelements, can't get the full script to work for measure of a man.
//  figure out how to escape correctly. currently the escape funciton used turns it garbled, just tried it really quick
const OverlayText = styled(Text)`
position: relative;
overflow: hidden;
&:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "${ props => props.content }";
    overflow: hidden;
    text-align: justify;
    text-transform: uppercase;
    font-family: "OCR A Extended", monospace;
    opacity: 0.3;    
} 
`


const Section = props => {
    let css = checkProps(props, {minHeight: '450px'})

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
        fontFamily: '"Ubuntu Mono", monospace',
        textTransform: "uppercase",
        ':focus':  {
            outline: 'none'
        }
    })

    return <Button
        {...props}
        css={css}
    />
}

const Slashes = props => {
    // todo: add arrow to transition group, hide from ArrowClickableButton if hovered
    return <TransitionGroup component={null}>
        {props.hovered ?
            [0.5, 0.75, 1].map(
                    ({ opacity, index }) => (
                        <CSSTransition
                            timeout={500}
                            classNames="fade"
                            key={index}
                        >
                            <Text color={props.color} style={{marginLeft: "-4px", marginTop: "-1px", opacity: opacity, marginRight: index === 2 ? "-5px" : "0"}} fontFamily={'mono'}>/</Text>
                        </CSSTransition>
                    )
                )
        : null }
            </TransitionGroup>
}

const ArrowClickableButton = props => {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    return (
        <ClickableButton {...props} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <Text color={props.color} style={{"display": "flex"}}><div style={{paddingRight: "5px"}}>{props.buttonText}</div><Slashes color={props.color} hovered={hovered} /><Text style={{marginLeft: "5px", marginTop: "-1px"}}>></Text></Text>
        </ClickableButton>
    )
}


const PageTitle = props => <BrandedSubHeading {...props} alignSelf='center' fontSize={5} mb={4} />

const PageHero = (props) => (
    <Section bg={props.bg} color={props.color}>
        <OverlayText color='blue' content={props.overlay}>
            <FlexContent flexDirection='column' px={4} flex={1} style={{position:'relative'}}>
                <PageTitle>{props.title}</PageTitle>
                <TextNoFirstMarginP fontSize={3} px={[4,5]}>
                    <ReactMarkdown
                        source={props.blurb}
                        renderers={{ link: (props) => <a href={props.href} target="_blank">{props.children}</a> }}
                    />
                </TextNoFirstMarginP>
            </FlexContent>
        </OverlayText>
    </Section>
)

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


export { Section, FlexContent, FullHeightFlexContent, ClickableButton, ArrowClickableButton, TextNoFirstMarginP,
    ClickableLink, PrettyInput, FullHeightSection, PageTitle, PageHero,
    BrandedMainHeading, BrandedSubHeading, OverlayText};
