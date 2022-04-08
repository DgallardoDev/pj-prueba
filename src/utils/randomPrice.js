// se deja como min y max estos precios para que el valor sea un multiplo de 10
export const randomPrice = (min = 1000, max = 100000) => {
  const price = (Math.floor(Math.random() * (max / 10 - min / 10)) + min/10) * 10;
  return price;
};
