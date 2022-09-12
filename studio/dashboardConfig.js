export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '631eefe9780f1a6b25cb304d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-vx7nqdqm',
                  apiId: '904d4238-b3c2-4b6e-b235-d6e298d4db01'
                },
                {
                  buildHookId: '631eefe9780f1a6b25cb304e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-ifwvpa7z',
                  apiId: 'b8a45307-b829-4689-a16b-dddec5402953'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kalo69/sanity-nextjs-landing-page',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-ifwvpa7z.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
