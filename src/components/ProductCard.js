import { useProduct } from "../hooks/useProduct";

export const ProductCard = () => {
  const { counter, increaseBy } = useProduct(0);

  return (
    <div className="productCard">
      <img
        onClick={()=>{
          alert ('touched')
        }}
        className="productCard__img"
        src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_19960000-023d0002.png"
        alt=""
      />
      <span className="productCard__title">Mewtwo</span>
      <div className="productCard__buttonsContainer">
        <button
          className="productCard__buttonMinus"
          onClick={() => increaseBy(-1)}
        >
          -
        </button>
        <div className="productCard__countLabel">{counter}</div>
        <button
          className="productCard__buttonAdd"
          onClick={() => increaseBy(+1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
