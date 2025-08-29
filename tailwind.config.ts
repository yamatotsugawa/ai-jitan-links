import type { Config } from "tailwindcss";


export default {
content: [
"./app/**/*.{js,ts,jsx,tsx,mdx}",
"./components/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
extend: {
colors: {
brand: {
50: "#eef6ff",
100: "#d9ebff",
200: "#b8d8ff",
300: "#8ebfff",
400: "#5d9dff",
500: "#377dff", // メインの青
600: "#2d64d1",
700: "#264fa5",
800: "#1f3f82",
900: "#1a356b"
}
},
boxShadow: {
soft: "0 8px 20px rgba(55,125,255,0.15)",
},
borderRadius: {
'2xl': '1rem',
}
},
},
plugins: [],
} satisfies Config;