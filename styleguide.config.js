const path = require('path');
const fs = require('fs');
const wpc = require('./config/webpack-prod-config.js');

module.exports = {
  getExampleFilename(componentPath) {
    if (componentPath.indexOf('src') > -1) {
      return componentPath.replace(/src/, 'examples').replace(/\.jsx?$/, '.md');
    }
    return componentPath;
  },

  sections: [
    // {
    //   name: 'Demo',
    //   content: 'examples/Examples.md',
    //   exampleMode: 'hide',
    // },
    {
      name: 'Documentation',
      content: 'examples/Documentation.md',
      sectionDepth: 1,

      sections: [
        {
          name: 'Installation',
          //   content: 'docs/installation.md',
          description: 'The description for the installation section',
        },
        {
          name: 'Configuration',
          content: 'examples/configuration.md',
        },
      ],
    },
    {
      name: 'Components',
      // content: 'examples/Components.md',
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      components: ['src/StarPicker.jsx'],
      skipComponentsWithoutExample: true,
      // sectionDepth: 1,
    },
    {
      name: 'Props',
      // content: 'examples/Components.md',
      exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      components: ['src/defaultStarRenderer.jsx'],
      skipComponentsWithoutExample: true,
      // sectionDepth: 1,
      sections: [
        {
          name: 'starRendererProps',
          content: 'examples/Props_starRendererProps.md',
        },
        {
          name: 'starRenderer',
          content: 'examples/Props_starRenderer.md',
        },
      ],
    },
    {
      name: 'Examples',
      // components: 'dist/ui/*.js',
      exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      sectionDepth: 1,
      content: 'examples/Examples.md',

      sections: [
        {
          name: 'Color mixing',
          content: 'examples/Examples_colorMixing.md',
        },
        {
          name: 'Half stars',
          content: 'examples/Examples_halfStars.md',
        },
        {
          name: 'Using a Custom Renderer',
          content: 'examples/Examples_customRenderer.md',
          // description: 'Using a custom star-renderer',
        },
        {
          name: 'Custom characters',
          content: 'examples/Examples_starChars.md',
        },
        {
          name: 'Resetting',
          content: 'examples/Examples_doubleTap.md',
        },
        {
          name: 'Styling the Default Renderer',
          content: 'examples/Examples_customStyling.md',
        },
        {
          name: 'Disabling',
          content: 'examples/Examples_disabled.md',
        },
        {
          name: 'Number of stars',
          content: 'examples/Examples_numberStars.md',
        },
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
