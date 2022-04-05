import { RiDeleteBin6Line } from "react-icons/ri";
export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="cartDetail">
        <table className="cartDetail__table">
          <thead>
            <tr>
              <td>Producto</td>
              <td>Precio</td>
              <td>Cantidad</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cartDetail__table__product">
                <img
                  src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_19960000-023d0002.png"
                  alt=""
                />
                <h4>Figure - Mewtwo</h4>
              </td>
              <td>$9.990</td>
              <td>
                <div className="cartDetail__table__buttonsContainer">
                  <button className="productCard__buttonMinus">-</button>
                  <div className="productCard__countLabel">0</div>
                  <button className="productCard__buttonAdd">+</button>
                </div>
              </td>
              <td>$9.990</td>
              <td>
                <RiDeleteBin6Line size={30} />
              </td>
            </tr>

            <tr>
              <td className="cartDetail__table__product">
                <img
                  src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_19960000-023d0002.png"
                  alt=""
                />
                <h4>Figure - Mewtwo</h4>
              </td>
              <td>$9.990</td>
              <td>
                <td>
                  <div className="cartDetail__table__buttonsContainer">
                    <button className="productCard__buttonMinus">-</button>
                    <div className="productCard__countLabel">0</div>
                    <button className="productCard__buttonAdd">+</button>
                  </div>
                </td>
              </td>
              <td>$9.990</td>
              <td>
                <RiDeleteBin6Line size={30} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cartResume">
        <h2>Resumen</h2>
        <hr />
        <div className="cartResume__products">
          <span>6 productos</span>
          <span>$9.990</span>
        </div>
        <button className="cartResume__finishButton">Finalizar Compra</button>
      </div>
    </div>
  );
};
