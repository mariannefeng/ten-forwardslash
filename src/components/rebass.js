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

const PageTitle = props => <BrandedMainHeading {...props} textAlign='center' alignSelf='center' fontSize={[5,6]} mb={4} />

const BrandedSubHeading = styled(Heading)`
    text-transform: uppercase;
    font-family: 'Ubuntu Mono', monospace;
    letter-spacing: 1.5px;
`

const PageSubtitle = props => <BrandedSubHeading {...props} alignSelf='center' fontSize={5} mb={4} />

function string_as_unicode_escape(input) {
    //https://stackoverflow.com/questions/5786483/char-to-hex-in-javascript
    var output = '';
    for (var i = 0, l = input.length; i < l; i++)
        output += '\\' + input.charCodeAt(i).toString(16);
    return output;
}

//fixme: since changing to using psuedoelements, can't get the full script to work for measure of a man.
//  figure out how to escape correctly. currently the escape funciton used turns it garbled, just tried it really quick
const OverlayText = styled(Text)`
position: relative;
overflow: hidden;
z-index: 1;
&:after {
    font-size: ${props => props.overlayFontSize ? props.overlayFontSize : '12px'};
    word-wrap: break-word;
    overflow-wrap: break-word;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    content: "${ props => string_as_unicode_escape(props.content) }";
    overflow: hidden;
    text-align: justify;
    text-transform: uppercase;
    font-family: "OCR A Extended", monospace;
    opacity: ${ props => props.opacity ? props.opacity : "0.3" };    
} 
`


const Section = props => {
    let css = checkProps(props, {minHeight: '450px'})

    return < Flex
        py = {[1, 2]}
        css = {css}
        {...props}
    />

}

const FullHeightSection = props => {
    let css = checkProps(props, {minHeight: '100vh'})

    return <Section
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
            <Text color={props.color} style={{"display": "flex"}}><span style={{marginRight: "3px"}}>{props.buttonText}</span><Slashes color={props.color} hovered={hovered} /><Text style={{marginLeft: "5px", marginTop: "-1px"}}>></Text></Text>
        </ClickableButton>
    )
}

const PageHero = (props) => {
    let heroContent = (<FlexContent flexDirection='column' px={4} flex={1} style={{position: 'relative', height: "100%"}}
                                    alignItems='center' justifyContent='center'>
        <FlexContent flexDirection='column'>
            <BrandedMainHeading fontSize={[5, 6]} mb={[3, 4]} color='green'
                                textAlign='center'> {'<' + props.title + '>'}</BrandedMainHeading>
            <TextNoFirstMarginP fontSize={3} px={[4, 5]} color='white'>
                <ReactMarkdown
                    source={props.blurb}
                    renderers={{link: (props) => <a href={props.href} target="_blank">{props.children}</a>}}
                />
            </TextNoFirstMarginP>
        </FlexContent>
    </FlexContent>);
    if (props.overlay) {
        return (<Section bg={props.bg} color={props.color}>
            <OverlayText color='blue' content={props.overlay} mx='auto' mb={4} overlayFontSize={props.overlayFontSize}>
                {heroContent}
            </OverlayText>
        </Section>)
    }
    return (<Section bg={props.bg} color={props.color}>
        {heroContent}
    </Section>)
}

PageHero.defaultProps = {
    bg: 'black',
    overlayFontSize: '16px',
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
        text-decoration: none;
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
    ClickableLink, PrettyInput, FullHeightSection, PageTitle, PageHero, PageSubtitle,
    BrandedMainHeading, BrandedSubHeading, OverlayText};
