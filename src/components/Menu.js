import React from 'react'
import { Box, Link, Image } from 'rebass'
import { FlexContent } from "./rebass";
import styled from "styled-components";

const NavLink = styled(Link)`
text-decoration: none;
padding: 2px;
&:hover {
    border-bottom: 2px solid #03a776;
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
                    width={[1 / 10, 1 / 15]}
                    src={props.logo}
                />
            </Link>
            <Box mx='auto'/>
            {props.content.map((c, i) => {
                if (c.showInNav) {
                    return (<Box pl={3} key={i}>
                        <NavLink href={c.path} key={'desktopMenu' + i} color='darkgray'>{c.label}</NavLink>
                    </Box>)
                }
            }

            )}
        </FlexContent>
    )
}

export default Menu
