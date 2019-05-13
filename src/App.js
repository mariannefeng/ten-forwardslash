import React from 'react'
import { Root, Routes, addPrefetchExcludes, withSiteData } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App(siteData) {
  //TODO: make mobile collapse/uncollapse menu work
  return (
    <Root>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </Link>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    {siteData.content.map((c, i) => (<span key={'mobileMenu' + i} aria-hidden="true">{c.label}</span>))}
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    {siteData.content.map((c, i) => (
                        <Link key={'desktopMenu' + i} className="navbar-item" to={c.path}>{c.label}</Link>
                    ))}
                </div>
            </div>
        </nav>

      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default withSiteData(App)
