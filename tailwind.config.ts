import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // ตั้งชื่อฟอนต์โดยใช้เครื่องหมายธรรมดาและให้ array เป็นค่าของฟอนต์
        'Noto Sans Thai': ['Noto Sans Thai', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};

export default config;
