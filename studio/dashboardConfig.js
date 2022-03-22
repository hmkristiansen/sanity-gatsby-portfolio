export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '623a12f0318c74094e6fbced',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-25utvayu',
                  apiId: 'e36a7eb8-8902-4c26-aeea-f2aba9730b57'
                },
                {
                  buildHookId: '623a12f092cf760d598a9894',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-guavqr5u',
                  apiId: 'aeceb89b-30cc-4b31-8097-a6ee76dd2473'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hmkristiansen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-guavqr5u.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
