module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#7A2A81",
        "light-purple": "#9352A1",
        "lightest-purple": "rgba(153, 79, 178, 0.2)",
        "transparent-purple": "rgba(147, 83, 161, 0.75)",
        "normal-green": "#078549",
        "lime-green": "#50A446",
        "light-green": "#DCF0DA",
        "dark-yellow": "#EDAA36",
        "light-yellow": "#FFF5E4",
        "black": "#292929",
        "light-gray":"#F4F4F4"
      },
      fontFamily: {
        sans: "Cabin",
      },
      borderWidth: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
      },
    },
  },
  plugins: [],
};
