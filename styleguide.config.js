const path = require('path');

module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'src/StarPicker.md',
    },
    {
      name: 'Demo',
      content: 'examples/Examples.md',
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
    {
      name: 'Usage Examples',
      // components: 'dist/ui/*.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      sections: [
        {
          name: 'Custom StarRenderer',
          content: 'examples/Examples_customRenderer.md',
          description: 'Using a custom star-renderer',
        },
        {
          name: 'Custom Styling of Default Renderer',
          content: 'examples/Examples_customStyling.md',
          description: 'Adding custom styles to the default setup',
        },
        // {
        //   name: 'Live Demo',
        //   external: true,
        //   href: 'http://example.com',
        // },
      ],
    },
  ],
  webpackConfig: require('./config/webpack-prod-config.js'),
  components: 'src/**/*.{js,jsx}',
  styleguideDir: 'styleguidistHtml',
  pagePerSection: true,
  moduleAliases: {
    'react-star-picker': path.resolve(__dirname, 'index.js'),
  },
};
