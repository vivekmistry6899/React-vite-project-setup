/** @type {import('tailwindcss').Config} */

const rem = (px: number) => {
  return px * 0.0625 + 'rem'
}

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      10: rem(10),
      11: rem(11),
      12: rem(12),
      14: rem(14),
      16: rem(16),
      18: rem(18),
      20: rem(20),
      22: rem(22),
      24: rem(24),
      26: rem(26),
      28: rem(28),
      32: rem(32),
      36: rem(36),
      40: rem(40),
      42: rem(42),
      48: rem(48),
    },
    extend: {
      colors: {
        success: {
          DEFAULT: '#027A48',
          100: '#027A01',
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
