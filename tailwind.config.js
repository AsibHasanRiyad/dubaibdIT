/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    ],
  theme: {
    colors:{
      heading:'#252531',
      paragraph:'#343438',
      primary:'#B98E75'
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}

