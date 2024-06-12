import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            height: {
                "10v": "10vh",
                "15v": "15vh",
                "25v": "25vh",
                "65v": "65vh",
            },
            // colors: {
            //     "header": "#bbc8cf",
            // },
            backgroundColor: {
                "header": "#bbc8cf",
                "footer": "#bbc8cf",
                "main": "#eff2f3",
            }
        },
    },

    plugins: [forms, require("daisyui")],
};
