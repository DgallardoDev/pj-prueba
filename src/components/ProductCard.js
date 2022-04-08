import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart, decrementCart } from "../redux/actions/cart";
import { formatPrice } from "../utils/formatPrice";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // se obtienen los productos actualmente en carro
  const productCart = useSelector((state) =>
    state.cart.products.find((productCart) => productCart.id === product.id)
  );

  //metodo para despachar agregar al carro +1 
  const addCartHandler = () => {
    dispatch(addCart({ ...product }));
  };

  //metodo para despachar agregar al carro -1 
  const decrementCartHandler = () => {
    dispatch(decrementCart({ ...product }));
  };

  //metodo para navegar a la vista de detalle enviando el id de producto
  const handlerClickProduct = () => {
    navigate(`/detail/?id=${product.id}`);
  }
  
  return (
    <div className="productCard">
      <img
        onClick={handlerClickProduct}
        className="productCard__img"
        src={product.image}
        alt=""
      />
      <span className="productCard__title">{product.name}</span>
      <span className="productCard__price">{formatPrice(product.price)}</span>
      <div className="productCard__buttonsContainer">
        <button
          className="productCard__buttonMinus"
          onClick={decrementCartHandler}
        >
          -
        </button>
        <div className="productCard__countLabel">
          {productCart ? productCart.quant : 0}
        </div>
        <button className="productCard__buttonAdd" onClick={addCartHandler}>
          +
        </button>
      </div>
    </div>
  );
};
