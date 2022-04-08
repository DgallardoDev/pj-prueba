import { useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import { RadioFilter } from "../components/RadioFilter";
export const ProductList = () => {
  // se obtienen los productos del store
  let products = useSelector((state) => state.catalog);

  // se crea este estado en el caso de querer filtrar por tipo de producto
  const [filter, setFilter] = useState("All");

  // se asigna al estado del componente en el caso de clickear algun radio button
  const handlerChangeRadio = (e) => {
    setFilter(e.target.value);
  };
  //si el filter es all se mantiene el arreglo de productos, si posee un filtro se crea un arreglo con productos filtrados
  const showProducts = filter === "All" ? products : products.filter((products) => products.type === filter);
  return (
    <div className="productList">
      <RadioFilter handlerChangeRadio = {handlerChangeRadio}/>
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
