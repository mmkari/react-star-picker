const path = require('path');
const fs = require('fs');
const wpc = require('./config/webpack-prod-config.js');

module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'src/StarPicker.md',
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      components: [
        'src/StarPicker.jsx',
        'src/defaultStarRenderer.jsx',
        'src/defaultStarRendererStarComponent.jsx',
      ],
      skipComponentsWithoutExample: true,
    },
    {
      name: 'Demo',
      content: 'examples/Examples.md',
      exampleMode: 'hide',
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
      // sectionDepth: 1,

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
  webpackConfig: wpc,
  components: 'src/**/*.{js,jsx}',
  styleguideDir: 'styleguidistHtml',
  pagePerSection: true,
  moduleAliases: {
    'react-star-picker': path.resolve(__dirname, 'index.js'),
  },
  require: [path.join(__dirname, 'examples/Examples_overrides.css')],
  updateExample(props, exampleFilePath) {
    const { settings, lang } = props;
    if (typeof settings.file === 'string') {
      const filepath = path.resolve(exampleFilePath, settings.file);
      delete settings.file;
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang,
      };
    }
    return props;
  },
};
