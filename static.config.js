import path from 'path'
import fs from 'fs'
import klaw from 'klaw'
import yaml from 'js-yaml'
import React from 'react'

//TODO: error handle this properly, if we can't read site yml then give up
const siteConfig = yaml.safeLoad(fs.readFileSync('site.yml', 'utf8'))

//retrieves page fields based on generated yml from netlifycms
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


export default {
    getSiteData: async () => ({
        title: siteConfig.title,
        description: siteConfig.description,
        content: siteConfig.content,
        logo: siteConfig.logoUrl
    }),

    getRoutes: async () => {
        const fields = await getPageFields()

        //iterates over all site content and hooks up yml data to static pages
        return siteConfig.content.map((page) => {
            return {
                path: page.path,
                getData: () => ({data: fields[page.key]})
            }
        })

        return []
    },

    plugins: [
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
            <title>{siteConfig.titleHome}</title>
        </Head>
        <Body>
        {children}
        </Body>
        </Html>
    )
}
