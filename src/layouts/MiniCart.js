import { RiDeleteBin6Line } from "react-icons/ri";
export const MiniCart = ({ displayCart }) => {
  return (
    <div className="miniCart" style={{ display: displayCart }}>
      <div className="miniCart__header">
        <h2>Carrito de compras</h2>
        <span className="miniCart__header__close">X</span>
      </div>
      <hr />
      <div className="miniCart__products">
        <div className="miniCart__products__product">
          <img
            src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_19960000-023d0002.png"
            alt=""
          />
          <span className="miniCart__products__product__description">
            titulo
            <br />
            descripcion
            <br />1 x $25.000
          </span>
          <div className="miniCart__products__product__button">
            <RiDeleteBin6Line size={30} />
          </div>
        </div>
      </div>
      <hr />
      <div className="miniCart__total">
        <h2>Total</h2>
        <h2>$25.000</h2>
      </div>
      <button className="miniCart__button__checkout">
        Continuar en Checkout
      </button>
    </div>
  );
};
