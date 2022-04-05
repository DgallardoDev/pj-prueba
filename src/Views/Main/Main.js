import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../layouts/Header";
import { MiniCart } from "../../layouts/MiniCart";
import { Navigation } from "../../routes/Navigation";
import "../../styles/styles.scss";

const Main = () => {
  const [displayCart, setDisplayCart] = useState('none');
  return (
    <>
      <MiniCart displayCart={displayCart}/>
      <Header setDisplayCart={setDisplayCart} displayCart={displayCart}/>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </>
  );
};
export default Main;
