/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        container: "0px -20px 20px 16px #2c2727d9",
        avatar: "0px 0px 16px 4px #2c2727d9",
      },
      backgroundColor: {
        sidebar: "#202222",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss"), require("flowbite/plugin")],
};
