import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { getCatalog } from "../redux/actions/catalog";
import { Checkout } from "../views/Checkout";
import { ProductDetail } from "../views/ProductDetail";
import { ProductList } from "../views/ProductList";

export const Navigation = () => {

  const dispatch = useDispatch();

  // al iniciar el programa se obtienen todos los productos de la api para trabajar con el catalogo
  useEffect(() => {
    dispatch(getCatalog());
    // eslint-disable-next-line
  }, []);
  
  return (
    <Routes>
      <Route path="/list" element={<ProductList />}></Route>
      <Route path="/detail" element={<ProductDetail />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/*" element={<Navigate to="/list" />} />
    </Routes>
  );
};
