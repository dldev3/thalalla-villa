/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prime-bg-beige': '#F2E8CF',
        'prime-green': '#386641',

      },
      backgroundImage: {
        'landing': "url('/img/landing1.jpg')",
      },
      plugins: [],
    }
  }
}
