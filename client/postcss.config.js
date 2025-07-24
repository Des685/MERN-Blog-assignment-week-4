// postcss.config.js
// Configuration for Tailwind CSS v4.x and @tailwindcss/postcss

import tailwindcss from '@tailwindcss/postcss'; // Import the *specific PostCSS plugin for Tailwind*
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // Call the imported TailwindCSS PostCSS plugin as a function
    autoprefixer(), // Call Autoprefixer as a function
  ],
};