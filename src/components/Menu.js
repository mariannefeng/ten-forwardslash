import React from 'react'
// import { Link } from 'components/Router'
import { Box, Link, Image } from 'rebass'
import styled from 'styled-components'
import { FlexContent } from "./rebass";

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
        <FlexContent
            px={2}
            py={3}
            color='darkgray'
            bg='white'
            alignItems='center'>
            <Link href='/'>
                <Image
                    width={[ 1/10, 1/15, 1/18 ]}
                    src={props.logo}
                />
            </Link>
            <Box mx='auto'/>
            {props.content.map((c, i) => (
                <Box pl={3} key={i}>
                    <NavLink href={c.path} key={'desktopMenu' + i} color='darkgray'>{c.label}</NavLink>
                </Box>
            ))}
        </FlexContent>
    )
}

export default Menu
