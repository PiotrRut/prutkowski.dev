/* eslint-disable @typescript-eslint/no-var-requires */
const log = require('../log');

module.exports.setGenerator = function (plop) {
  // Controller generator
  plop.setGenerator('controller', {
    description: 'Generate a section from template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of this Section?",
        validate(value) {
          let message = true;
          if (!/.+/.test(value)) {
            message = log.formatError(
              'Missing',
              'You must define a section name'
            );
          }

          return message;
        },
      },
    ],
    actions() {
      return [
        {
          type: 'add',
          path: 'src/content/{{pascalCase name}}/index.ts',
          templateFile: 'generators/section/templates/index.hbs',
        },
        {
          type: 'add',
          path: 'src/content/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'generators/section/templates/section.hbs',
        },
        {
          type: 'add',
          path: 'src/content/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
          templateFile: 'generators/section/templates/styles.hbs',
        },
      ];
    },
  });
};
