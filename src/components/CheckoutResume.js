import { Navigate } from "react-router-dom";
import { setMessage } from "../redux/actions/message";
import { showMiniCart } from "../redux/actions/showMiniCart";
import { types } from "../redux/types";
import { formatPrice } from "../utils/formatPrice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CheckoutResume = () => {
  const dispatch = useDispatch();

  //finaliza la compra
  const handlerClick = () => {
    dispatch(setMessage({ show: true, text: "Compra Finalizada con exito" }));
    // se resetea el store
    dispatch({ type: types.reset });
  };

  // cuando se renderize el checkout debe cerrar el carrito en el caso de que este abierto
  useEffect(() => {
    dispatch(showMiniCart(false));
  }, [dispatch]);

  // se obtiene del store el valor total y productos del carro
  const { products, total } = useSelector((state) => state.cart);

  // en el caso de que el carro este vacio, devuelve al home
  if (products.length === 0) {
    return <Navigate to="/" />;
  }

  // se calcula la cantidad de articulos vendidos para el resumen
  const productQuant = products.reduce((acum, curr) => acum + curr.quant, 0);

  return (
    <div className="cartResume">
      <h2>Resumen</h2>
      <hr />
      <div className="cartResume__products">
        <span>{productQuant} productos</span>
        <span>{formatPrice(total)}</span>
      </div>
      <button className="cartResume__finishButton" onClick={handlerClick}>
        Finalizar Compra
      </button>
    </div>
  );
};
