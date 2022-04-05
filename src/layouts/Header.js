import { BsCart2 } from "react-icons/bs";
import logo from "../assets/amiboo.png";

export const Header = ({ displayCart, setDisplayCart }) => {
  return (
    <div className="header">
      <img className="header__img" src={logo} alt="logo" onClick={()=>{alert("hello")}}/>
      <span
        className="header__span"
        onClick={() => {
          setDisplayCart((prev) => (prev === "none" ? "flex" : "none"));
        }}
      >
        <BsCart2 size={40} />
      </span>
    </div>
  );
};
