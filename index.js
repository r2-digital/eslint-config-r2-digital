module.exports = {
    root: true,
    env: {
        node: true,
        es2023: true,
        jest: true
    },
    ignorePatterns: ['node_modules', 'build', 'dist', 'coverage'],
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'argsIgnorePattern': '_',
                'ignoreRestSiblings': true
            }
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                'ts': 'never'
            }
        ],
        'import/prefer-default-export': 'off',
        'import/no-dynamic-require': 'error',
        'import/no-cycle': 'off',
        'prettier/prettier': [
            'error', {}, { 'usePrettierrc': true }
        ],
        'class-methods-use-this': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'func-names': ['error', 'as-needed'],
        'object-curly-newline': ['error', {
            'ObjectExpression': 'always',
            'ObjectPattern': { 'multiline': true },
            'ImportDeclaration': { 'multiline': true },
            'ExportDeclaration': { 'multiline': true }
        }],
        'implicit-arrow-linebreak': 'off',
        'arrow-body-style': ['error', 'as-needed'],
        'global-require': 'off',
        'no-underscore-dangle': 'off',
        'default-param-last': 'error',
        'max-len': [
            'error',
            {
                'code': 80,
                'ignoreComments': true,
                'ignoreTrailingComments': true,
                'ignoreUrls': true,
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true,
                'ignoreRegExpLiterals': true
            }
        ],
        'quotes': [
            'error',
            'single',
            {
                'avoidEscape': true,
                'allowTemplateLiterals': true
            }
        ],
        'lines-between-class-members': [
            'error',
            'always',
            {
                'exceptAfterSingleLine': true
            }
        ],
        'no-unreachable': 'error'
    },
    settings: {
        'import/parsers': {
            [require.resolve('@typescript-eslint/parser')]: ['.ts', '.d.ts']
        },
        'import/resolver': {
            'typescript': {
                'alwaysTryTypes': true
            }
        }
    }
}
