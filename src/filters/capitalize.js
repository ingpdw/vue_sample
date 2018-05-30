export default (value) => {
  if (!value) return '';
  return value.toString().charAt(0).toUpperCase() + value.slice(1);
};
