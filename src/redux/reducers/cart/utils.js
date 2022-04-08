//CALCULAR TOTAL
export const calcTotal = (products) => {
  const total = products.reduce((acum, curr) => acum + curr.total, 0) ?? 0;
  return total;
};
// AGREGAR UN PRODUCTO AL CARRO
export const addCart = (productAdd, stateProducts) => {
  // retorna nuevo arreglo

  //buscar si el producto existe en el arreglo
  const productFind = stateProducts.find(
    (product) => product.id === productAdd.id
  );

  if (!productFind) {
    return [
      ...stateProducts,
      {
        id: productAdd.id,
        price: productAdd.price,
        quant: 1,
        total: productAdd.price,
        image: productAdd.image,
        name: productAdd.name,
      },
    ];
  }
  // si existe se toma el producto encontrado y se actualiza la cantidad y el total

  return stateProducts.map((product) => {
    if (product.id === productFind.id) {
      return {
        ...product,
        quant: product.quant + 1,
        total: product.price * (product.quant + 1),
      };
    }
    return { ...product };
  });
};
// DECREMENTAR PRODUCTO EN CARRO
export const decrementCart = (productAdd, stateProducts) => {
  const productFind = stateProducts.find(
    (product) => product.id === productAdd.id
  );
  // si el producto no existe devuelve el mismo arreglo anterior
  if (!productFind) {
    return stateProducts;
  }
  // si el producto tiene una cantidad de 1 significa que hay que eliminarlo del arreglo, se hace un filter para no cnosiderarlo dentro del nuevo estado
  if (productFind.quant === 1) {
    return stateProducts.filter((product) => product.id !== productFind.id);
  }

  // si el producto tiene una cantidad mayor a 1 se actualizara su quantity y total
  return stateProducts.map((product) => {
    if (product.id === productFind.id) {
      return {
        ...product,
        quant: product.quant - 1,
        total: product.price * (product.quant - 1),
      };
    }
    return { ...product };
  });
};

export const removeCart = (productRemove, stateProducts) => {
  return stateProducts.filter((product) => product.id !== productRemove.id);
};
