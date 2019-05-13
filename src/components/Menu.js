import {withSiteData} from "react-static";
import React from 'react'
import { Link } from 'components/Router'

//TODO: code review - finally settle once and for all how we want to declare React components
export default (props) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </Link>

                <a role="button"
                      className="navbar-burger burger"
                      aria-label="menu"
                      aria-expanded="false"
                      data-target="navbarBasicExample">
                    {props.content.map((c, i) => (<span key={'mobileMenu' + i} aria-hidden="true">{c.label}</span>))}
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    {props.content.map((c, i) => (
                        <Link key={'desktopMenu' + i} className="navbar-item" to={c.path}>{c.label}</Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}