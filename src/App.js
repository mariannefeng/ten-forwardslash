import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme, { colors } from './theme'

import { Root, Routes, addPrefetchExcludes, withSiteData } from 'react-static'

import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import Menu from "./components/Menu";
import Footer from "./components/Footer";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

// todo: load the fonts we want in here as well
//font-family: 'Ubuntu Mono', monospace;
// font-family: 'Nunito Sans', sans-serif;
const GlobalStyles = createGlobalStyle`
    html, body, div#root {
        height: 100%;
    }
    body {
        @import url('https://fonts.googleapis.com/css?family=Nunito+Sans|Ubuntu+Mono&display=swap');
        @font-face {
            font-family: "OCR A Extended";
            src: url("//db.onlinewebfonts.com/t/971c473a19b6bba1059ba6add6af78d7.eot");
            src: url("//db.onlinewebfonts.com/t/971c473a19b6bba1059ba6add6af78d7.eot?#iefix") format("embedded-opentype"),
            url("//db.onlinewebfonts.com/t/971c473a19b6bba1059ba6add6af78d7.woff2") format("woff2"),
            url("//db.onlinewebfonts.com/t/971c473a19b6bba1059ba6add6af78d7.woff") format("woff"),
            url("//db.onlinewebfonts.com/t/971c473a19b6bba1059ba6add6af78d7.ttf") format("truetype"),
            url("//db.onlinewebfonts.com/t/971c473a19b6bba1059ba6add6af78d7.svg#OCR A Extended") format("svg");
        }
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
