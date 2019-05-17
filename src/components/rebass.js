import React from 'react'
import { Box, Flex } from 'rebass'

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

export { Section, FullHeightFlex };
