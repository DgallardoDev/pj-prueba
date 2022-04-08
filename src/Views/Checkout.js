import { CheckoutResume } from "../components/CheckoutResume";
import { TableDetail } from "../components/TableDetails";

export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="cartDetail">
        <h2>Detalle</h2>
        <hr />
        <TableDetail />
      </div>
     <CheckoutResume />
    </div>
  );
};
