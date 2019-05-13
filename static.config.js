import path from 'path'
import axios from 'axios'
import fs from 'fs'
import klaw from 'klaw'
import yaml from 'js-yaml'



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
  getSiteData: () => ({
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
}
