import React from 'react'

function LinkRenderer(props) {
    return <a href={props.href} target="_blank">{props.children}</a>
}

function HeaderRenderer(props) {
    return <a href={props.href} target="_blank">{props.children}</a>
}

export {LinkRenderer, HeaderRenderer}