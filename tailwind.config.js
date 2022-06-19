/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#f8f1ff',
        secondary:'#232c33',
        branch:'#87bba2',
        subBranch:'#decdf5',
        spareLight:'#4a5e6d',
        spareDark:'#3a4955'
      }
    },
  },
  plugins: [],
}
