import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme, { colors } from './theme'

import {Root, Routes, addPrefetchExcludes, withSiteData} from 'react-static'
//
import {Link, Router} from 'components/Router'
import Dynamic from 'containers/Dynamic'
import Menu from "./components/Menu";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

// todo: load the fonts we want in here as well
const GlobalStyles = createGlobalStyle`
    body {
        font-family: Helvetica, Arial, sans-serif;
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
                <Menu content={siteData.content}/>
                <div className="content">
                    <React.Suspense fallback={<em>Loading...</em>}>
                        <Router>
                            <Dynamic path="dynamic"/>
                            <Routes path="*"/>
                        </Router>
                    </React.Suspense>
                </div>
            </Root>
        </ThemeProvider>
    )
}

export default withSiteData(App)


//body{font: normal 10px Helvetica, Arial, sans-serif;}
//input, select, textarea, button{font-family:inherit;}
//
