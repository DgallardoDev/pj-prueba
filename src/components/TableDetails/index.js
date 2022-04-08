import { useSelector } from "react-redux";
import { ItemTable } from "./ItemTable";

export const TableDetail = () => {
  const products = useSelector((state) => state.cart.products);
  return (
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
        {products.map((product) => (
          <ItemTable key = {product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};
