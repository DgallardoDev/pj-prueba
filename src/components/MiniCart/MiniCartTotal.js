import { formatPrice } from "../../utils/formatPrice";

export const MiniCartTotal = ({total}) => {
  return (
    <div className="miniCart__total">
      <h2>Total</h2>
      <h2>{formatPrice(total)}</h2>
    </div>
  );
};
