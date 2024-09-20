/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          container: {
              center: true, // Optional: centers the container
              padding: '1rem', // Optional: add padding
              screens: {
                  sm: '100%', // Adjust for small screens
                  md: '100%', // Adjust for medium screens
                  lg: '1200px', // Set max width for large screens
                  xl: '1200px', // Set max width for extra large screens
              },
          },
          borderColor: {
            'custom-gray': 'rgb(35, 35, 35)',
          },
      },
  },
  plugins: [],
}
