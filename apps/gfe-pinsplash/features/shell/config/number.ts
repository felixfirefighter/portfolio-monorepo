export const formatNumber = (num: number) => {
  const formatter = new Intl.NumberFormat('en-US');
  return formatter.format(num);
};
