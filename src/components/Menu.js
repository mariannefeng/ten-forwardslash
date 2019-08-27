import React, { Fragment } from 'react'
import { Box, Flex, Link, Image } from 'rebass'
import { FlexContent } from './rebass'
import styled from 'styled-components'
import Hide from './Hide'

const NavLink = styled(Link)`
text-decoration: none;
padding: 2px;
font-family: 'Ubuntu Mono', monospace;
text-transform: uppercase;
&:hover {
    border-bottom: 2px solid #03a776;
}
`

//menu takes in a map of navbar items
//currently, this data comes from our site.yml. See App.js for usage
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMobileMenu: false
        };
    }

    onClick = () => {
        this.setState({ showMobileMenu: !this.state.showMobileMenu });
    }

    render() {
        return (
            <Fragment>
                <FlexContent
                    px={2}
                    py={3}
                    color='darkgray'
                    bg='white'
                    alignItems='center'>
                    <Link href='/'>
                        <Image
                            width={[2 / 10, 3/10, 0.18 ]}
                            src={this.props.logo}
                        />
                    </Link>
                    <Box mx='auto'/>

                    <Hide breakpoints={[1, 2]}>
                        <Box pr={3}>
                            <i className='fas fa-bars fa-lg' onClick={this.onClick}></i>
                        </Box>
                    </Hide>

                    <Hide breakpoints={[0]}>
                        {this.props.content.map((c, i) => {
                                if (c.showInNav) {
                                    return (<Box pl={3} key={i}>
                                        <NavLink href={c.path} key={'desktopMenu' + i} color='darkgray'>{c.label}</NavLink>
                                    </Box>)
                                }
                            }
                        )}
                    </Hide>
                </FlexContent>

                <Hide breakpoints={[1, 2]} pr={3} flexDirection='column'>
                    {this.state.showMobileMenu && this.props.content.map((c, i) => {
                            if (c.showInNav) {
                                return (<Box key={i} css={{ textAlign: 'right' }} pb={3}>
                                            <NavLink href={c.path} key={'desktopMenu' + i} color='darkgray'>{c.label}</NavLink>
                                        </Box>)
                            }
                        }
                    )}
                </Hide>
            </Fragment>

        )
    }
}

export default Menu
