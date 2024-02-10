/** @type {import('tailwindcss').Config} */
import tailwindForms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-94": "94vh",
        "screen-6": "6vh",
        "screen-91": "91vh",
      },
    },
  },
  plugins: [tailwindForms, "prettier-plugin-tailwindcss"],
};
