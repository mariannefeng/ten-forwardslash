import React from 'react'
import {Image, Box} from 'rebass'
import {BrandedSubHeading} from "./rebass"

function LinkRenderer(props) {
    return <a href={props.href} target="_blank">{props.children}</a>
}

function ImageRenderer(props) {
    return <Box py={[3,4]}><Image
        {...props}
        mx='auto'
        px={[0, 1]}
        width={[1]}/>{props.title && <BrandedSubHeading textAlign='right' fontSize={1} fontFamily='mono'>{'<' + props.title + '>'}</BrandedSubHeading>}</Box>
}

function BlockquoteRenderer(props) {
    return props.children.map((child) => {
        return <blockquote>
            {child}
        </blockquote>
    })
}

export {LinkRenderer, ImageRenderer, BlockquoteRenderer}