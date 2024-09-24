/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {    
    extend: {
      colors:{
      "glow-light":"rgba(255, 203, 154, 0.4)",
      "glow-dark":"rgba(255, 203, 154, 0.5)"
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "sqrt":"Square721B",
        "sqrt-roman":"Square721B-roman",
        "azonix":"Azonix"
      },
    
    fontSize: {
      "xs":"18px" ,
      "sm":"20px" , 
      "base":"24px" , 
      "lg":"30px" ,
      "xl":"32px" ,
      "2xl":"36px" ,
      "3xl":"48px" ,   
      "4xl":"64px" ,
    },
    screens: {
      'desktop':{"max":"1950px"},
      'laptop':{'max':"1540px"},
      'laptopSmall':{"max":"1281px"}
    }
  },
  },
  plugins: [],
};
