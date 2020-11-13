export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-2-studio-zx6ec9us',
                  apiId: '789b3c2b-7a29-44ca-8de6-79e995a3e1d7'
                },
                {
                  buildHookId: '5fae2fb8445f645fcdc28927',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-2-web-rd3xtv8w',
                  apiId: '1b20c664-d083-423d-948d-d784935c8c6f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beepbleep/sanity-nuxt-events-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-2-web-rd3xtv8w.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
