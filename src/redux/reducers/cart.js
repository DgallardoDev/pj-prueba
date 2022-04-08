import { types } from "../types";

const initialState = { total: 0, products: [] };
let productFind;
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addCart:
      //buscar si el producto existe en el arreglo
      productFind = state.products.find((product) => product.id === action.payload.id);
      // si el producto no existe se actualiza el total
      if (!productFind) {
        return {
          ...state,
          total: state.total + action.payload.price,
          // se hace una copia del arreglo y se añade un nuevo elemento
          products: [
            ...state.products,
            {
              id: action.payload.id,
              price: action.payload.price,
              quant: 1,
              total: action.payload.price,
              image: action.payload.image,
              name: action.payload.name,
            },
          ],
        };
      }
      // si no existe, se actualiza el total
      return {
        ...state,
        total: state.total + action.payload.price,
        // se mapea todo el arreglo y el producto que existe se actualiza la cantidad y el precio total, los demas productos mantendran su valor
        products: state.products.map((product) => {
          if (product.id === productFind.id) {
            return {
              ...product,
              quant: product.quant + 1,
              total: product.price * (product.quant + 1),
            };
          }
          return { ...product };
        }),
      };
    case types.decrementCart:
      //buscar si el producto existe en el arreglo
      productFind = state.products.find(
        (product) => product.id === action.payload.id
      );
      // si el producto no existe se actualiza el total
      if (productFind) {
        //si el producto tiene una cantidad de 1 significa que hay que eliminarlo del arreglo
        if (productFind.quant === 1) {
          return {
            ...state,
            total: state.total - action.payload.price,
            products: state.products.filter(
              (product) => product.id !== productFind.id
            ),
          };
        }
        //si el producto tiene una cantidad mayor a 1 se resta de su respectiva posicion
        return {
          ...state,
          total: state.total - action.payload.price,
          // se mapea todo el arreglo y el producto que existe se actualiza la cantidad y el precio total, los demas productos mantendran su valor
          products: state.products.map((product) => {
            if (product.id === productFind.id) {
              return {
                ...product,
                quant: product.quant - 1,
                total: product.price * (product.quant - 1),
              };
            }
            return { ...product };
          }),
        };
      }
      return state;
    case types.removeCart:
      //eliminar el item completo
      let productArr = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      let total = productArr.reduce((acum, curr) => acum + curr.total, 0) ?? 0;
      return { ...state, total: total, products: productArr };

    case types.reset:
      return initialState;
    default:
      return state;
  }
};
