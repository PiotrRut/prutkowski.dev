/* eslint-disable @typescript-eslint/no-var-requires */
const log = require('../log');

module.exports.setGenerator = function (plop) {
  // Controller generator
  plop.setGenerator('controller', {
    description: 'Generate a component from template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of the Component?",
        validate(value) {
          let message = true;
          if (!/.+/.test(value)) {
            message = log.formatError(
              'Missing',
              'You must define a component name'
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
          path: 'src/components/{{pascalCase name}}/index.ts',
          templateFile: 'generators/component/templates/index.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'generators/component/templates/component.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
          templateFile: 'generators/component/templates/styles.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{pascalCase name}}/{{pascalCase name}}.models.tsx',
          templateFile: 'generators/component/templates/models.hbs',
        },
      ];
    },
  });
};
