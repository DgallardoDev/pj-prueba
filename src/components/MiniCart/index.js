import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showMiniCart } from "../../redux/actions/showMiniCart";
import { MiniCartItem } from "./MiniCartItem";
import { MiniCartTotal } from "./MiniCartTotal";
export const MiniCart = () => {
  const { total, products: productsCart } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //metodo para hacer el dispatch al store y abrir o cerrar el carrito desplegable
  const handlerMiniCart = (display) => {
    dispatch(showMiniCart(display));
  };

  return (
    <div className="miniCart">
      <div className="miniCart__header">
        <h2>Carrito de compras</h2>
        <span
          className="miniCart__header__close"
          onClick={() => handlerMiniCart(false)}
        >
          X
        </span>
      </div>
      <hr />
      {productsCart.length ? (/* si existen productos en el carro muestra el detalle, si no muesta carrito vacio */
        <>
          <div className="miniCart__products">
            {productsCart.map((product) => (
              <MiniCartItem key={product.id} product={product} />
            ))}
          </div>
          <hr />
          <MiniCartTotal total={total} />
          <button
            className="miniCart__button__checkout"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Continuar en Checkout
          </button>
        </>
      ) : (
        <h3>Carrito Vacio</h3>
      )}
    </div>
  );
};
