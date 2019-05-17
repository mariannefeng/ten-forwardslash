import React from 'react'
import { Box, Flex, Button } from 'rebass'

const Section = props =>
    <Box
        {...props}
        py={[2, 4]}
    />

const FullHeightFlex = props =>
    <Flex
        {...props}
        css={{height: "100%"}}
    />

const ClickableButton = props =>
    <Button
        {...props}
        css={{cursor: "pointer"}}
    />

export { Section, FullHeightFlex, ClickableButton };
