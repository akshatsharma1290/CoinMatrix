/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      bigTablet : "964px",
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        noto: ['Noto Sans Georgian', "sans-serif"],
        space: ['Space Grotesk', "sans-serif"]
      },
      backgroundImage: {
        "gradient-purple": "linear-gradient(25deg,#2600fc,#ff00ea)",
        "gradient-home": "linear-gradient(0deg,#0f051d 30%,#130749 70%)",
        "footer" : "url(../src/assets/footer-img.png)"
      },
      fontSize: {
        '8xl': ['7rem', {
          lineHeight: '1'
        }],
      },
     

    },
  },
  plugins: [],
}