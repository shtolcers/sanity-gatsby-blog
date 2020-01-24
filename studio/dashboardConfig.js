export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e2ab1553980559f956c88e8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dakiz3cp',
                  apiId: '7c109869-90f7-45c7-aab0-b111f19106fb'
                },
                {
                  buildHookId: '5e2ab156eb3a3fc9bc1e076d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3podwzy2',
                  apiId: '7bddbba7-005c-48d3-9cbd-f0fe66b232aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shtolcers/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3podwzy2.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
