module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'script',
    },
    extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'prettier',
    ],
    plugins: [
        'node',
        'import',
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': 'warn',
        'no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
        'no-var': 'error',
        'prefer-const': 'warn',
        'strict': ['error', 'global'],
        'node/no-unsupported-features/es-syntax': [
            'error',
            {
                ignores: ['modules'],
            },
        ],
        'node/no-missing-require': 'error',
        'node/no-unpublished-require': 'off',
        'node/no-extraneous-require': 'error',
        'node/no-deprecated-api': 'warn',
        'import/no-unresolved': 'error',
        'import/order': [
            'warn',
            {
                groups: [['builtin', 'external', 'internal']],
                'newlines-between': 'always',
            },
        ],
    },
};
