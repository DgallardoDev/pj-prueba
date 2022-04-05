import { ProductCard } from "../components/ProductCard";

export const ProductList = () => {
  return (
    <div className="productList">
      <div className="productList__types">
        <h2>Select Type</h2>
        <br />
        <div className="productList__types__radio">
          <div className="productList__types__radioItem">
            <input type="radio" name="type" id="all" value="all" />
            &nbsp;
            <h4> All</h4>
          </div>
          <br />
          <div className="productList__types__radioItem">
            <input type="radio" name="type" id="figure" value="figure" />
            &nbsp;
            <h4>Figure</h4>
          </div>
          <br />
          <div className="productList__types__radioItem">
            <input type="radio" name="type" id="card" value="card" />
            &nbsp;
            <h4>Card</h4>
          </div>
          <br />
          <div className="productList__types__radioItem">
            <input type="radio" name="type" id="yarn" value="yarn" />
            &nbsp;
            <h4>Yarn</h4>
          </div>
        </div>
      </div>
      <div className="productList__catalog">
        {/* <div className="productList__catalog__title">
          <h2>All</h2>
        </div> */}
        <div className="productList__catalog__products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
