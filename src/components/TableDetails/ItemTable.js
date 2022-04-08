import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addCart, decrementCart, removeCart } from "../../redux/actions/cart";
import { formatPrice } from "../../utils/formatPrice";
export const ItemTable = ({ product }) => {
  
  const dispatch = useDispatch();
  const addCartHandler = () => {
    dispatch(addCart({ ...product }));
  };

  const decrementCartHandler = () => {
    dispatch(decrementCart({ ...product }));
  };

  const removeCartHandler = () => {
    dispatch(removeCart({ ...product }));
  };

  return (
    <>
      <tr>
        <td className="cartDetail__table__product">
          <img src={product.image} alt="" />
          <h4>{product.name}</h4>
        </td>
        <td>{formatPrice(product.price)}</td>
        <td>
          <div className="cartDetail__table__buttonsContainer">
            <button
              className="productCard__buttonMinus"
              onClick={decrementCartHandler}
            >
              -
            </button>
            <div className="productCard__countLabel">{product.quant}</div>
            <button className="productCard__buttonAdd" onClick={addCartHandler}>
              +
            </button>
          </div>
        </td>
        <td>{formatPrice(product.total)}</td>
        <td>
          <RiDeleteBin6Line size={30} onClick={removeCartHandler} />
        </td>
      </tr>
    </>
  );
};
