import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme, { colors } from './theme'

import { Root, Routes, addPrefetchExcludes, withSiteData } from 'react-static'

import { Router } from 'components/Router'
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
`

function App(siteData) {
    //TODO: make mobile collapse/uncollapse menu work
    return (
        <ThemeProvider theme={theme}>
            <Root>
                <GlobalStyles/>

                <Menu content={siteData.content} logo={siteData.logo}/>

                <div>
                    <React.Suspense fallback={<em>Loading...</em>}>
                        <Router>
                            <Dynamic path="dynamic"/>
                            <Routes path="*"/>
                        </Router>
                    </React.Suspense>
                </div>

                <Footer social={siteData.social}/>
            </Root>
        </ThemeProvider>
    )
}

export default withSiteData(App)
