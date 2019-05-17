import React from 'react'
import { Link } from 'components/Router'
import { Navbar } from 'react-bulma-components';

//menu is a dumb component that takes in a map of navbar items
//currently, this data comes from our site.yml. See App.js for usage
function Menu(props) {
    return (
        <Navbar>
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="/">
                    <img src="https://bulma.io/images/bulma-logo.png" />
                </Navbar.Item>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container position="end">
                    {props.content.map((c, i) => (
                        <Navbar.Item href={c.path} key={'desktopMenu' + i}  >{c.label}</Navbar.Item>
                    ))}
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    )
}

export default Menu