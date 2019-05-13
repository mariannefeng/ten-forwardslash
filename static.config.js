import path from 'path'
import axios from 'axios'
import fs from 'fs'
import klaw from 'klaw'
import yaml from 'js-yaml'
import React from 'react'


function getPageFields() {
  const fieldMap = {}

  const getFields = () => new Promise(resolve => {
    // Check if content directory exists //
    if (fs.existsSync('./content')) {
      klaw('./content')
          .on('data', item => {
            // Filter function to retrieve .md files //
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
            // posts = items for below routes //
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
  //TODO: site data should live in a config file somewhere, not hard coded in here
  getSiteData:  async ({ }) => ({
    title: 'Ten-Forward Website',
  }),

  getRoutes: async () => {
    // const { data: posts } = await axios.get(
    //     'https://jsonplaceholder.typicode.com/posts'
    // )
    //
    // console.log('just finished getting data from json placeholder', posts)

    const fields = await getPageFields()
    console.log('fieldsssss', fields)

    //TODO: make this a loopy function that creates correct routes?
    return [
      {
        path: '/',
        getData: () => ({
          data: fields['homepage']
        }),
      },
      {
        path: '/about',
        getData: () => ({
          data: fields['about']
        }),
      },
      {
        path: '/donate',
        getData: () => ({
          data: fields['donate']
        }),
      },
      {
        path: '/services',
        getData: () => ({
          data: fields['services']
        }),
      },
      {
        path: '/contact',
        getData: () => ({
          data: fields['contact']
        }),
      },
    ]
  },
  plugins: [
    [
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
               siteData,
             }) => (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>WHAT THE FUUUUCk</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
        </Head>
        <Body>
          {children}
        </Body>
      </Html>
  )
}
