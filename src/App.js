import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme, { colors } from './theme'

import { Root, Routes, addPrefetchExcludes, withSiteData } from 'react-static'

import { Router, Link } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import 'app.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const GlobalStyles = createGlobalStyle`
    html, body, div#root {
        height: 100%;
    } 
    body {
        font-family: 'Nunito Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${colors.darkgray};
        margin: 0;
    }
    input, select, textarea, button {
        font-family:inherit;
    }
    a {
        color: ${colors.yellow};
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    div.flex-content {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-bottom: ${theme.space[4]}px;
        
        @media (max-width: ${theme.breakpoints[0]}) {
            margin-bottom: ${theme.space[3]}px;
        }
    }
    div.flex-content .four-fifths {
        width: 79%;
    }
    div.flex-content .one-fifth {
        width: 19%;
    }
    div.flex-content .one-half {
        width: 49%;
    }
    div.flex-content > * {
        @media (max-width: ${theme.breakpoints[0]}) {
            padding: ${theme.space[2]}px 0px;
            width: 100% !important;
        }
    }
    blockquote {
        background: #f9f9f9;
        font-family: ${theme.fonts.submono};
        padding: ${theme.space[3]}px;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    a.text-decoration-none:hover {
        text-decoration: none;
    }
`

function App(siteData) {
    return (
        <Root>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>

                <Menu content={siteData.content} logos={siteData.logos} theme='black'/>

                <div style={{marginTop: "-1px"}}>
                    <React.Suspense fallback={<em>Loading...</em>}>
                        <Router>
                            <Dynamic path="dynamic"/>
                            <Routes path="*"/>
                        </Router>
                    </React.Suspense>
                </div>

                <Footer social={siteData.social} do={siteData.digitalOcean}/>
            </ThemeProvider>
        </Root>
    )
}

export default withSiteData(App)
