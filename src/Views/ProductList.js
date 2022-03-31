import { ProductCard } from "../components/ProductCard";

export const ProductList = () => {
  return (
    <div className="productlist__main">
      <div className="productlist__catalog">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
