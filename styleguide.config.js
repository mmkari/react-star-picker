const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');
const propsParser = require('react-docgen-typescript');
const wpc = require('./config/webpack-prod-config.js');

const extendedWpc = merge(wpc, {
  resolve: {
    alias: {
      'react-star-picker': path.resolve(__dirname, 'src/index.ts'),
    },
  },
});

const srcFolder = 'src';

module.exports = {
  getExampleFilename(componentPath) {
    if (componentPath.indexOf(srcFolder) > -1) {
      return componentPath
        .replace(/src/, 'examples')
        .replace(/\.[tj]sx?$/, '.md');
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
          content: 'examples/installation.md',
        },
        {
          name: 'Configuration',
          content: 'examples/configuration.md',
        },
      ],
    },
    {
      name: 'Components',
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      components: [`${srcFolder}/StarPicker.tsx`],
      skipComponentsWithoutExample: true,
    },
    {
      name: 'Props',
      exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      // components: [`${srcFolder}/defaultStarRenderer.tsx`],
      skipComponentsWithoutExample: true,
      sections: [
        {
          name: 'starRenderer',
          content: 'examples/Props_starRenderer.md',
        },
        // {
        //   name: 'halfStars',
        //   content: 'examples/Props_halfStars.md',
        // },
        // {
        //   name: 'numberStars',
        //   content: 'examples/Props_numberStars.md',
        // },
        //
        // ... MOVE PROP pages here
      ],
    },
    {
      name: 'Examples',
      exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      sectionDepth: 1,
      content: 'examples/Examples.md',
      sections: [
        // {
        //   name: 'Default Renderer: Custom characters',
        //   content: 'examples/Examples_starChars.md',
        // },
        {
          name: 'Custom Renderer',
          exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
          usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
          content: 'examples/customRenderers.md',
          skipComponentsWithoutExample: true,
          sections: [
            {
              name: 'Simple custom character renderer',
              content: 'examples/Examples_starChars.md',
            },
            {
              name: 'Using a Custom Renderer',
              content: 'examples/Examples_customRenderer.md',
            },
            // {
            //   name: 'starRenderer',
            //   content: 'examples/Props_starRenderer.md',
            // },
          ],
        },
        {
          name: 'Default Renderer: Styling',
          content: 'examples/Examples_customStyling.md',
        },
        {
          name: 'Half stars',
          content: 'examples/Examples_halfStars.md',
        },
        {
          name: 'Resetting',
          content: 'examples/Examples_doubleTap.md',
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
  webpackConfig: extendedWpc,
  components: 'src/*.{ts,tsx}',
  styleguideDir: 'styleguidistHtml',
  pagePerSection: true,

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
  propsParser: propsParser.withCustomConfig('./tsconfig.json', {
    propFilter: { skipPropsWithoutDoc: true },
    paths: {
      '@components/*': ['src/*'],
      'react-star-picker': [path.resolve(__dirname, 'src/index.ts')],
    },
  }).parse,
};
