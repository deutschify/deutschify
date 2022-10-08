/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                // palette1: {
                //     10: "#F4E285",
                //     20: "#2D604F",
                //     30: "#ABC4A8",
                //     40: "#6A9AB8",
                //     50: "#2F4858",
                //     60: "#FDF0D5",
                //     70: "#DD9E93",
                //     80: "#BC4B51",}

                palette: {
                    10: "#F4E285",
                    20: "#F58F84",
                    30: "#5B8E7D",
                    40: "#99C1B9",
                    50: "#2F4858",
                    60: "#FDF0D5",
                    70: "#DD9E93",
                    80: "#BC4B51",
                },
            },
            boxShadow: {
                outer: "-2px -2px 24px 0px rgba(92,83,92,1)",
                inner: "inset 7px 10px 18px -1px rgba(92,87,92,1)",
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
    plugins: [],
};
