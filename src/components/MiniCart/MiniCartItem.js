import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/actions/cart";
import { formatPrice } from "../../utils/formatPrice";
export const MiniCartItem = ({ product }) => {
  const dispatch = useDispatch();
  const removeCartHandler = () => {
    dispatch(removeCart({ ...product }));
  };
  return (
    <div className="miniCart__products__product">
      <img src={product.image} alt="" />
      <span className="miniCart__products__product__description">
        {product.name}
        <br />
        {product.quant} x {formatPrice(product.price)}
      </span>
      <div className="miniCart__products__product__button">
        <RiDeleteBin6Line size={30} onClick={removeCartHandler} />
      </div>
    </div>
  );
};
