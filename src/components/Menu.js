import React, { Fragment } from 'react'
import { Box, Flex, Link, Image } from 'rebass'
import { FlexContent } from './rebass'
import styled from 'styled-components'
import Hide from './Hide'
import { colors } from '../theme'

const NavLink = styled(Link)`
text-decoration: none;
padding: 2px;
font-family: 'Ubuntu Mono', monospace;
text-transform: uppercase;
letter-spacing: 2px;
&:hover {
    text-decoration: none;
    border-bottom: 2px solid ${ props => props.borderColor};
}
`

//menu takes in a map of navbar items
//currently, this data comes from our site.yml. See App.js for usage
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.theme = this.getMenuTheme();
        this.state = {
            showMobileMenu: false
        };
    }
    getMenuTheme = () => {
        let theme = {}
        switch (this.props.theme) {
            case "black":
                theme = {
                    logoUrl: this.props.logos.white,
                    navLink: 'green',
                    borderColor: colors.white,
                    background: 'black',
                }
                break;
            case "white":
                theme = {
                    logoUrl: this.props.logos.black,
                    navLink: 'black',
                    borderColor: colors.green,
                    background: 'white',
                }
                break;
            case "yellow":
                theme = {
                    logoUrl: this.props.logos.black,
                    navLink: 'black',
                    borderColor: colors.red,
                    background: 'yellow',
                }
                break;
            case "green":
                theme = {
                    logoUrl: this.props.logos.black,
                    navLink: 'black',
                    borderColor: colors.black,
                    background: 'green',
                }
                break;
        }
        return theme
    }
    onClick = () => {
        this.setState({ showMobileMenu: !this.state.showMobileMenu });
    }

    render() {
        return (
            <Fragment>
                <Box bg={this.theme.background}>
                <FlexContent
                    px={2}
                    py={1}
                    alignItems='center'>
                    <Link href='/'>
                        <Image
                            width={[2 / 10, 3/10, 0.18 ]}
                            src={this.theme.logoUrl}
                        />
                    </Link>
                    <Box mx='auto'/>

                    <Hide breakpoints={[1, 2]}>
                        <Box pr={3} color={this.theme.navLink}>
                            <i className='fas fa-bars fa-lg' onClick={this.onClick}></i>
                        </Box>
                    </Hide>

                    <Hide breakpoints={[0]}>
                        {this.props.content.map((c, i) => {
                                if (c.showInNav) {
                                    return (<Box pl={3} key={i}>
                                        <NavLink href={c.path} key={'desktopMenu' + i} color={this.theme.navLink} borderColor={this.theme.borderColor}>{c.label}</NavLink>
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
                                            <NavLink href={c.path} key={'desktopMenu' + i} color={this.theme.navLink}>{c.label}</NavLink>
                                        </Box>)
                            }
                        }
                    )}
                </Hide>
                </Box>
            </Fragment>

        )
    }
}

Menu.defaultProps = {
    theme: 'black'
}

export default Menu
