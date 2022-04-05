import { Navigate, Route, Routes } from "react-router-dom";
import { Checkout } from "../views/Checkout";
import { ProductDetail } from "../views/ProductDetail";
import { ProductList } from "../views/ProductList";

export const Navigation = () => {
  return (
    <Routes>
        <Route path="/list" element ={<ProductList />}></Route>
        <Route path="/detail" element ={<ProductDetail />}></Route>
        <Route path="/checkout" element ={<Checkout />}></Route>
        <Route path="/*" element ={<Navigate to ="/list" />}/>
    </Routes>
  )
}
