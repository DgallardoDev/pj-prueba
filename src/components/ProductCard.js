import { useProduct } from "../hooks/useProduct";

export const ProductCard = () => {
  const { counter, increaseBy } = useProduct(0);
  return (
    <div className="productCard__main">
      <img
        className="productCard__productImg"
        src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03520902.png"
        alt=""
      />
      <span className="productCard__productDescription">Descripcion</span>
      <div className="productCard__buttonsContainer">
        <button className="productCard__buttonMinus" onClick={()=>increaseBy(-1)}>-</button>
        <div className="productCard__countLabel">{counter}</div>
        <button className="productCard__buttonAdd" onClick={()=>increaseBy(+1)}>+</button>
      </div>
    </div>
  );
};
