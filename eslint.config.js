import js from '@eslint/js';
import globals from 'globals';

export default [
    {
        ignores: ['dist'],
    },
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        linterOptions: {
            reportUnusedDisableDirectives: true, // Включаем отчёты об ошибках для неиспользуемых директив
        },
        rules: {

        },
    },
];