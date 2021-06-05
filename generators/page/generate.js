/* eslint-disable @typescript-eslint/no-var-requires */
const log = require('../log');

module.exports.setGenerator = function (plop) {
  plop.setGenerator('controller', {
    description: 'Generates a page from template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of the Page?",
        validate(value) {
          let message = true;
          if (!/.+/.test(value)) {
            message = log.formatError('Missing', 'You must define a page name');
          }

          return message;
        },
      },
    ],
    actions() {
      return [
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}/index.ts',
          templateFile: 'generators/page/templates/index.hbs',
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'generators/page/templates/page.hbs',
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
          templateFile: 'generators/page/templates/styles.hbs',
        },
        {
          type: 'add',
          path: 'pages/{{kebabCase name}}.tsx',
          templateFile: 'generators/page/templates/next-page.hbs',
        },
      ];
    },
  });
};
