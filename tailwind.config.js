module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      height: {
        150: "150px",
      },
      width: {
        150: "150px",
      },
    },
    minWidth: {
      "1/2": "50%",
    },
  },
};
