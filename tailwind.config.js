/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'blue': {
                    '950': '#000063',
                },
                },

            spacing: {
                '15': '3.75rem', // 15 * 0.25rem = 3.75rem
                '25': '6.25rem', // 25 * 0.25rem = 6.25rem
                '120': '30rem', // 120 * 0.25rem = 30rem
            },
        },
        fontFamily: {
            signature: ['Dancing Script'],
        }
    },
    plugins: [],
}

