import React, { Fragment } from 'react'
import { Box, Flex, Image, Text } from 'rebass'
import { Link } from './Router'
import { FlexContent } from './rebass'
import styled from 'styled-components'
import Hide from './Hide'
import { colors } from '../theme'

const NavLinkContainer = styled(Box)`
a.styled-nav-link {
    color: ${colors.green};
    text-decoration: none;
    padding: 2px;
    font-family: 'Ubuntu Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 2px;
    &:hover, &.active {
        text-decoration: none;
        border-bottom: 2px solid ${colors.white};
    }
    &.active {
        border-bottom-style: dashed;
    }
}
`
const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "styled-nav-link active" } : {}
}

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
                <NavLinkContainer bg='black'>
                    <FlexContent
                        px={2}
                        py={1}
                        alignItems='center'>
                        <Link to='/' className='styled-nav-link'>
                            <Image
                                width={[2 / 10, 3/10, 0.18 ]}
                                src={this.props.logos.white}
                            />
                        </Link>
                        <Box mx='auto'/>

                        <Hide breakpoints={[1, 2]}>
                            <Box pr={3} color='green'>
                                <i className='fas fa-bars fa-lg' onClick={this.onClick}></i>
                            </Box>
                        </Hide>

                        <Hide breakpoints={[0]}>
                            {this.props.content.map((c, i) => {
                                    if (c.showInNav) {
                                        return (<Box pl={3} key={i}>
                                            <Link to={c.path} key={'desktopMenu' + i} className='styled-nav-link' getProps={c.showWhenActive ? isActive : () => {}}>{c.label}</Link>
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
                                        <Link to={c.path} key={'desktopMenu' + i} className='styled-nav-link' getProps={c.showWhenActive ? isActive : () => {}}  onClick={this.onClick}>{c.label}</Link>
                                    </Box>)
                                }
                            }
                        )}
                    </Hide>
                </NavLinkContainer>
            </Fragment>

        )
    }
}

Menu.defaultProps = {
    theme: 'black'
}

export default Menu
