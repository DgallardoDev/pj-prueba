import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/amiboo.png";
import { MiniCart } from "../components/MiniCart";
import { showMiniCart } from "../redux/actions/showMiniCart";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //se obtiene valor para mostrar mini cart
  const displayMiniCart = useSelector((state) => state.showMiniCart);

  //metodo para cambiar de true a false o viceversa si se presiona el boton de carrito
  const handlerMiniCart = () => {
    dispatch(showMiniCart(!displayMiniCart));
  };
  
  return (
    <div className="header">
      <img
        className="header__img"
        src={logo}
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <span className="header__span" onClick={handlerMiniCart}>
        <BsCart2 size={40} />
      </span>
      {displayMiniCart ? <MiniCart /> : null}
    </div>
  );
};
