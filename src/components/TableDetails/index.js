import { useSelector } from "react-redux";
import { ItemTable } from "./ItemTable";

// tabla que se muestra en checkout para ultima revision antes de pagar
export const TableDetail = () => {
  //se obtienen los productos actualmente en carro
  
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
