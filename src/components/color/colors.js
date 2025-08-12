const shade = ({ min = 100, max = 900, value }) => {
  return Math.min(Math.max(min, value), max);
};

const Colors = {
  purple: function (value) {
    return `var(--color-purple-${shade({ value })})`;
  },
  beige: function (value) {
    return `var(--color-beige-${shade({ max: 500, value })})`;
  },
  blue: function (value) {
    return `var(--color-blue-${shade({ max: 500, value })})`;
  },
  green: function (value) {
    return `var(--color-green-${shade({ max: 500, value })})`;
  },
  gray: function (value) {
    return `var(--color-gray-${shade({ value })})`;
  },
  error: "var(--color-error)",
  surface: "var(--color-surface)",
};

export default Colors;
