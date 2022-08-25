/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  important: true,
  theme: {
    extend: {
      colors: {
        SoftRed: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        DarkCyan: "hsl(167, 40%, 24%)",
        DarkBlue: "hsl(198, 62%, 26%)",
        moderateCyan: "hsl(168, 34%, 41%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
