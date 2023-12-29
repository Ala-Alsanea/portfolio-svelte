/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui', ],
      // 'serif': ['ui-serif', 'Georgia', ],
      // 'mono': ['ui-monospace', 'SFMono-Regular', ],
      Satisfy: ["Satisfy", "cursive"],
      JetBrains: ["JetBrains"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      // "light",
      {
        mytheme: {
          primary: "#0000b3",

          secondary: "#03e25c",

          accent: "#cccccc",

          neutral: "#333333",

          "base-100": "#ffffff",

          info: "#03f588",

          success: "#047857",

          warning: "#fbbf24",

          error: "#e11d48",
        },

        fontFamily: "JetBrains Mono",
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    // themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};

