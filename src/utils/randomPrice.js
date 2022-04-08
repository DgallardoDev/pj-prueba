export const randomPrice = (min = 1000, max = 100000) => {
  min = min/10;
  max = max/10
  const price = (Math.floor(Math.random() * (max  - min )) + min) * 10;
  return price;
};
