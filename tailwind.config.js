/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
theme: {
    extend: {
        colors: {
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
            annie: "Annie Use Your Telescope",
            archisDaughter: "Architects Daughter",
            b612: "B612 Mono",
            baloo: "Baloo Da 2",
            comfortaa: "Comfortaa",
            comingsoon: "Coming Soon",
            kalam: "Kalam",
            mali: "Mali",
            oregano: "Oregano",
            overlook: "overlook",
            pacifico: "Pacifico",
            pangolin: "Pangolin",
            shadows: "Shadows Into Light",
            shortstack: "Short Stack",
            sunshiney: "Sunshiney",
            nextdoorgirl: "The Girl Next Door",
            twinklestar: "Twinkle Star",
        },
    },
},
plugins: [],
}