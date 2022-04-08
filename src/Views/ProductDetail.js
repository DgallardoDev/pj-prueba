import { useEffect } from "react";
import { BsCart2 } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { addCart, decrementCart } from "../redux/actions/cart";
import { showMiniCart } from "../redux/actions/showMiniCart";
import { formatPrice } from "../utils/formatPrice";
export const ProductDetail = () => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  
  //busca el id del producto en los params del url
  const idCharacter = searchParams.get("id");
  const product = useSelector((state) => state.catalog.find((product) => `${product.id}` === idCharacter));

  // cuando se renderize el checkout debe cerrar el minicarrito en el caso de que este abierto
  useEffect(() => {
    dispatch(showMiniCart(false));
  }, [dispatch]);

  // si no es un producto valido vuelve al home
  if (!product) {
    return <Navigate to="/" />;
  }

  //  +1 al carro
  const addCartHandler = () => {
    dispatch(addCart({ ...product }));
  };
  
  //  -1 al carro
  const decrementCartHandler = () => {
    dispatch(decrementCart({ ...product }));
  };

  return (
    <div className="productDetail">
      <div className="productDetail__image">
        <img src={product.image} alt={product?.name}></img>
      </div>
      <div className="productDetail__description">
        <h2>
          {product?.name} {formatPrice(product?.price)}
        </h2>
        <hr />
        <ul>
          <br />
          <li>Game Series : {product?.gameSeries}</li>
          <br />
          <li>Amiibo Series : {product?.amiiboSeries}</li>
          <br />
          <li>Tipo : {product?.type}</li>
        </ul>
        <div className="productDetail__cart">
          <button
            className="productDetail__cart__addCart"
            onClick={addCartHandler}
          >
            <BsCart2 /> Agregar al carrito
          </button>
          <button
            className="productDetail__cart__removeCart"
            onClick={decrementCartHandler}

          >
            <RiDeleteBin6Line /> Quitar del carrito
          </button>
        </div>
      </div>
    </div>
  );
};
