/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5eead4",
        
"secondary": "#818cf8",
        
"accent": "#a7f3d0",
        
"neutral": "#1D1D25",
        
"base-100": "#1f2937",
        
"info": "#3b82f6",
        
"success": "#4ade80",
        
"warning": "#fbbf24",
        
"error": "#F96784",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}