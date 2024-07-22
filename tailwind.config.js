/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
};
