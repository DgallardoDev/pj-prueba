import { BsCart2 } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
export const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="productDetail__image">
        <img
          src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_19270000-00260002.png"
          alt=""
        ></img>
      </div>
      <div className="productDetail__description">
        <h2>Jigglypuff</h2>
        <hr />
        <ul>
          <br />
          <li>Game Series : Pokemon</li>
          <br />
          <li>Amiibo Series : Super Smash Bros</li>
          <br />
          <li>Tipo : Figure</li>
        </ul>
        <div className="productDetail__cart">
          <button className="productDetail__cart__addCart">
            <BsCart2 /> Agregar al carrito
          </button>
          <button className="productDetail__cart__removeCart">
            <RiDeleteBin6Line /> Quitar del carrito
          </button>
        </div>
      </div>
    </div>
  );
};
