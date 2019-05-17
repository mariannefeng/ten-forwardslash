import React from 'react'
// import { Link } from 'components/Router'
import { Flex, Text, Box, Link } from 'rebass'
import styled from 'styled-components'

const NavLink = styled(Link)`
text-decoration: none;
&:hover {
    border-bottom: 2px solid gray;
}
`

//menu is a dumb component that takes in a map of navbar items
//currently, this data comes from our site.yml. See App.js for usage
function Menu(props) {
    return (
        <Flex
            px={2}
            color='darkgray'
            bg='white'
            alignItems='center'>
            <Text p={2} fontWeight='bold'>ten-forward</Text>
            <Box mx='auto' />
            {props.content.map((c, i) => (
                <Box pl={3}>
                    <NavLink href={c.path} key={'desktopMenu' + i} color='darkgray'>{c.label}</NavLink>
                </Box>
            ))}
        </Flex>
    )
}

export default Menu
