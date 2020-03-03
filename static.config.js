import path from 'path'
import fs from 'fs'
import klaw from 'klaw'
import yaml from 'js-yaml'
import React from 'react'

import dotenv from 'dotenv'

//initialize dotenv
dotenv.config()

//TODO: error handle this properly, if we can't read site yml then give up
const siteConfig = yaml.safeLoad(fs.readFileSync('site.yml', 'utf8'))

//retrieves page fields based on generated yml from netlifycms, keyed on yaml file name
function getPageFields() {
    const fieldMap = {}

    const getFields = () => new Promise(resolve => {
        // Check if content directory exists //
        if (fs.existsSync('./content')) {
            klaw('./content')
                .on('data', item => {
                    // Filter function to retrieve .yml files //
                    if (path.extname(item.path) === '.yml') {
                        // read content from yml file and load fields into map
                        const data = fs.readFileSync(item.path, 'utf8')
                        const fileName = path.parse(item.path).name
                        const fieldObj = yaml.safeLoad(data)
                        fieldMap[fileName] = fieldObj
                    }
                })
                .on('error', e => {
                    console.log(e)
                })
                .on('end', () => {
                    // Resolve promise for async getRoutes request //
                    resolve(fieldMap)
                })
        } else {
            // If content directory doesn't exist, return items as empty dict //
            resolve(fieldMap)
        }
    })

    return getFields()
}

//script for pushing to google analytics when not running locally
const gaScript = `
var host = window.location.hostname;
if(host !== "localhost") {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-125803686-1');
}
`

export default {

    //static data available to all static components (if they need it, see App.js for usage)
    getSiteData: async () => ({
        title: siteConfig.title,
        description: siteConfig.description,
        content: siteConfig.content,
        logos: siteConfig.logos,
        social: siteConfig.social,
        digitalOcean: siteConfig.digitalOcean
    }),

    getRoutes: async () => {
        const fields = await getPageFields()
        //iterates over all site content and hooks up yml data to paths defined in site.yaml's content block
         let routes = [
             ...siteConfig.content.map((page) => {
                return {
                    path: page.path,
                    getData: () => ({data: fields[page.key]})
                }
             }),
             {
                 path: '/portfolio',
                 getData: () => ({data: fields['portfolio']}),
                 children: fields.portfolio.singlePortfolio.map(post => {
                     return {
                         path: post.name,
                         template: 'src/containers/PortfolioItem',
                         getData: () => ({data: post})
                     }
                 })
             }
         ]
        return routes
    },

    plugins: [
        require.resolve('react-static-plugin-styled-components'),
        [
            //automagically creates url->page mappings by looking at files under src/pages
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
    ],

    Document: ({
                   Html,
                   Head,
                   Body,
                   children,
               }) => (
        <Html>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
            <title>{siteConfig.titleHome}</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125803686-1"></script>
            <script dangerouslySetInnerHTML={{__html: gaScript}}></script>
        </Head>
        <Body>
        {children}
        </Body>
        </Html>
    )
}
