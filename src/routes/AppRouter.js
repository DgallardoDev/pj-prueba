import { Route, Routes } from "react-router-dom";
import { Checkout } from "../Views/Checkout";
import { ProductDetail } from "../Views/ProductDetail";
import { ProductList } from "../Views/ProductList";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/list" element ={<ProductList />}></Route>
        <Route path="/detail" element ={<ProductDetail />}></Route>
        <Route path="/checkout" element ={<Checkout />}></Route>
    </Routes>
  )
}
