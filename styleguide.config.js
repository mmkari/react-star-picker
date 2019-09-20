module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'src/StarPicker.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          //   content: 'docs/installation.md',
          description: 'The description for the installation section',
        },
        {
          name: 'Configuration',
          //   content: 'docs/configuration.md',
        },
        // {
        //   name: 'Live Demo',
        //   external: true,
        //   href: 'http://example.com',
        // },
      ],
    },
    // {
    //   name: 'UI Components',
    //   //   content: 'docs/ui.md',
    //   components: 'dist/ui/*.js',
    //   exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
    //   usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    // },
  ],
  webpackConfig: require('./config/webpack-prod-config.js'),
  components: 'src/**/*.{js,jsx}',
  styleguideDir: 'styleguidistHtml',
  pagePerSection: true,
};
