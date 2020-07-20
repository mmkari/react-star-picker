const path = require('path');
const fs = require('fs');
// const wpc = require('./config/styleguidist-webpack-config.js');
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

// Supported languages are: markup, xml, html, mathml, svg, css, clike, javascript,
// js, markdown, md, scss, less, flow, typescript, ts, jsx, tsx, graphql, json, bash, shell, diff.

// const srcFolder = 'dist-ts';
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
      // content: 'examples/Components.md',
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      components: [`${srcFolder}/StarPicker.tsx`],
      skipComponentsWithoutExample: true,
      // sectionDepth: 1,
    },
    {
      name: 'Props',
      // content: 'examples/Components.md',
      exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      components: [`${srcFolder}/defaultStarRenderer.tsx`],
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
      // components: 'dist/*.js',
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
  webpackConfig: extendedWpc,
  // components: 'dist-ts/*.{js}',
  // components: 'dist/*.{ts,tsx}',
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
      // ...
    },
  }).parse,
  // moduleAliases: {
  //   '~/react-star-picker': path.resolve('/users/', '..', '..', 'index.ts'),

  //   'react-star-picker': path.resolve('/users/', '..', '..', 'index.ts'),
  //   // 'react-star-picker': path.resolve(__dirname, '..', '..', 'index.ts'),
  // },
};
