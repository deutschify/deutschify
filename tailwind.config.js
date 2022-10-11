/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {

                palette: {
                    // 10: "#F4E285",
                    // 20: "#F58F84",
                    30: "#5B8E7D",
                    40: "#99C1B9",
                    50: "#2F4858",
                    60: "#FDF0D5",
                    70: "#DD9E93",
                    80: "#BC4B51",
                },
            },
            boxShadow: {
                outer: "10px 10px 14px -2px rgba(0,0,0,0.75);",
                inner: "inset 10px 10px 14px -2px rgba(0,0,0,0.75);",
            },
            fontFamily: {
                block1: "Architects Daughter",
                block2: "Comfortaa",
                block3: "Short Stack",
            },
            fontFamily: {
                block1: "Architects Daughter",
                block2: "Comfortaa",
                block3: "Short Stack",
            },
            fontSize: {
                xxs: "0.65rem",
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
};
