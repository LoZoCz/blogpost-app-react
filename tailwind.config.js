/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                basic: '#fdf0d5',
                letter: '#000814',
                contrast: '#f0f0f0',
                redish: {
                    300: '#c1121f',
                    600: '#780000',
                },
                bluish: {
                    300: '#669bbc',
                    600: '#003049',
                },
            },
            fontFamily: {
                merri: ['Merriweather', 'system-ui', 'sans-serif'],
            },
            screens: {
                tablet: '1000px',
                mobile: '700px',
            },
        },
    },
    plugins: [],
}
