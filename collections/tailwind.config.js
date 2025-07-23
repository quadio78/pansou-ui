/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ios-bg': '#f5f7ff',
        'ios-card': '#ffffff',
        'ios-blue': '#0a84ff',
        'ios-gray': '#8e8e93',
        'ios-dark': '#1c1c1e'
      },
      boxShadow: {
        'ios': '0 4px 20px rgba(0,0,0,0.08)',
        'ios-card': '0 2px 10px rgba(0,0,0,0.05)'
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      }
    },
  },
  plugins: [],
}