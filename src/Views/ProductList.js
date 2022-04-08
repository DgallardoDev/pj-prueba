import { useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
export const ProductList = () => {
  // se obtienen los productos del store
  let products = useSelector((state) => state.catalog);

  // se crea este estado en el caso de querer filtrar por tipo de producto
  const [filter, setFilter] = useState('All');

  // se asigna al estado del componente en el caso de clickear algun radio button
  const handlerChangeRadio = (e)=>{
    setFilter(e.target.value);
  }

  const showProducts = filter ==='All'?products: products.filter(products=>products.type===filter)
  return (
    <div className="productList">
      <div className="productList__types">
        <h2>Tipo</h2>
        <br/>
        <div className="productList__types__radio">
          <div className="productList__types__radioItem">
            <input type="radio" name="type" id="all" value="All" onChange={handlerChangeRadio} />
            &nbsp;
            <h4> All</h4>
          </div>
          <br />
          <div className="productList__types__radioItem">
            <input type="radio" name="type" id="figure" value="Figure" onChange={handlerChangeRadio}/>
            &nbsp;
            <h4>Figure</h4>
          </div>
          <br />
          <div className="productList__types__radioItem">
            <input type="radio" name="type" id="card" value="Card" onChange={handlerChangeRadio}/>
            &nbsp;
            <h4>Card</h4>
          </div>
          <br />
          <div className="productList__types__radioItem">
            <input type="radio" name="type" id="yarn" value="Yarn" onChange={handlerChangeRadio}/>
            &nbsp;
            <h4>Yarn</h4>
          </div>
        </div>
      </div>
      <div className="productList__catalog"> 
        <div className="productList__catalog__products">
          {showProducts.map((product) => (
            <ProductCard product={product} key={product.tail} />
          ))}
        </div>
      </div>
    </div>
  );
};
