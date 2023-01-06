/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./lib/**/*.tsx"],
  theme: {
    screens: {
      mobile: "576px",
      tablet: "768px",
      desktop: "1200px",
    },
    fontSize: {
      h1: ["2.857rem", { lineHeight: "3.714rem", fontWeight: "var(--nextjs_ts_starter-font-weight_bold)" }],
      h2: ["2.571rem", { lineHeight: "3.143rem", fontWeight: "var(--nextjs_ts_starter-font-weight_bold)" }],
      h3: ["2.286rem", { lineHeight: "2.857rem", fontWeight: "var(--nextjs_ts_starter-font-weight_bold)" }],
      h4: ["2rem", { lineHeight: "2.571rem", fontWeight: "var(--nextjs_ts_starter-font-weight_bold)" }],
      h5: ["1.714rem", { lineHeight: "2.286rem", fontWeight: "var(--nextjs_ts_starter-font-weight_bold)" }],
      h6: ["1.429rem", { lineHeight: "2rem", fontWeight: "var(--nextjs_ts_starter-font-weight_bold)" }],
      "label-xl": [
        "1.286rem",
        { lineHeight: "1.714rem", fontWeight: "var(--nextjs_ts_starter-font-weight_regular)" },
      ],
      "label-lg": [
        "1.143rem",
        { lineHeight: "1.429rem", fontWeight: "var(--nextjs_ts_starter-font-weight_regular)" },
      ],
      label: ["1rem", { lineHeight: "1.143rem", fontWeight: "var(--nextjs_ts_starter-font-weight_regular)" }],
      "label-sm": [
        "0.857rem",
        { lineHeight: "1.143rem", fontWeight: "var(--nextjs_ts_starter-font-weight_regular)" },
      ],
      "label-xs": [
        "0.786rem",
        { lineHeight: "1rem", fontWeight: "var(--nextjs_ts_starter-font-weight_regular)" },
      ],
      "p-xl": [
        "1.286rem",
        { lineHeight: "2rem", fontWeight: "var(--nextjs_ts_starter-font-weight_regular)" },
      ],
      "p-lg": [
        "1.143rem",
        { lineHeight: "1.714rem", fontWeight: "var(--nextjs_ts_starter-font-weight_regular)" },
      ],
      p: ["1rem", { lineHeight: "1.429rem", fontWeight: "var(--nextjs_ts_starter-font-weight_regular)" }],
      "p-sm": [
        "0.857rem",
        { lineHeight: "1.429rem", fontWeight: "var(--nextjs_ts_starter-font-weight_regular)" },
      ],
      "p-xs": [
        "0.786rem",
        { lineHeight: "1.286rem", fontWeight: "var(--nextjs_ts_starter-font-weight_regular)" },
      ],
    },
    fontWeight: {
      bold: "var(--nextjs_ts_starter-font-weight_bold)",
      heading: "var(--nextjs_ts_starter-font-weight_bold)",
      medium: "var(--nextjs_ts_starter-font-weight_medium)",
      regular: "var(--nextjs_ts_starter-font-weight_regular)",
      light: "var(--nextjs_ts_starter-font-weight_light)",
    },
    fontFamily: {
      sans: ["Noto Sans", "Noto Sans HK", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      serif: ["Noto Sans", "Noto Sans HK", "-apple-system", "BlinkMacSystemFont", "serif"],
      mono: ["source-code-pro", "Menlo", "Monaco", "Consolas", "Courier New", "monospace"],
    },
    colors: {
      neutral: {
        white: "var(--nextjs_ts_starter-neutral_white)",
        50: "var(--nextjs_ts_starter-neutral_50)",
        100: "var(--nextjs_ts_starter-neutral_100)",
        200: "var(--nextjs_ts_starter-neutral_200)",
        300: "var(--nextjs_ts_starter-neutral_300)",
        400: "var(--nextjs_ts_starter-neutral_400)",
        500: "var(--nextjs_ts_starter-neutral_500)",
        600: "var(--nextjs_ts_starter-neutral_600)",
        700: "var(--nextjs_ts_starter-neutral_700)",
        800: "var(--nextjs_ts_starter-neutral_800)",
        900: "var(--nextjs_ts_starter-neutral_900)",
      },
      grey: {
        50: "var(--nextjs_ts_starter-grey_50)",
        100: "var(--nextjs_ts_starter-grey_100)",
        200: "var(--nextjs_ts_starter-grey_200)",
        300: "var(--nextjs_ts_starter-grey_300)",
        400: "var(--nextjs_ts_starter-grey_400)",
        500: "var(--nextjs_ts_starter-grey_500)",
        600: "var(--nextjs_ts_starter-grey_600)",
        700: "var(--nextjs_ts_starter-grey_700)",
        800: "var(--nextjs_ts_starter-grey_800)",
        900: "var(--nextjs_ts_starter-grey_900)",
      },
      transparent: "transparent",
      current: "currentColor",
      white: "var(--nextjs_ts_starter-neutral_white)",
    },
  },
  plugins: [require("@headlessui/tailwindcss"), require("@tailwindcss/container-queries")],
};
