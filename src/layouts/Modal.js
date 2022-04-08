import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../redux/actions/message";

export const Modal = () => {
  // se evalua el estado para abrir modal
  const msg = useSelector((state) => state.message);

  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(setMessage({ show: false, text: "" }));
  };
  return (
    <>
      {msg.show ? (
        <div id="myModal" className="modal">
          <div className="modal__content">
            <span className="modal__close" onClick={handlerClick}>
              X
            </span>
            <div className="modal__title">Mensaje</div>
            <hr />
            <br />
            <div className="modal__msg">{msg?.text}</div>
            <button className="modal__accept" onClick={handlerClick}>
              Aceptar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
