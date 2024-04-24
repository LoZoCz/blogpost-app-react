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
                orangish: {
                    300: '#f97316',
                    600: '#c2410c',
                },
                bluish: {
                    300: '#669bbc',
                    600: '#003049',
                },
                greyish: {
                    300: '#52525b',
                    600: '#18181b',
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
