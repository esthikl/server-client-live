// setup source from website https://levelup.gitconnected.com/how-to-properly-set-up-express-with-typescript-1b52570677c9

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",  'prettier'
    ],
    "rules": {
        'prettier/prettier': [
            1,
            {
              trailingComma: 'es5',
              singleQuote: true,
              semi: false,
            },
          ],
          ...require('eslint-config-prettier').rules,
          ...require('eslint-config-prettier/@typescript-eslint').rules,
    }
}
