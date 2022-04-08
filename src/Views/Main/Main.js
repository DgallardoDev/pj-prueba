import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../layouts/Header";
import { store } from "../../redux/store";
import { Modal } from "../../layouts/Modal";
import { Navigation } from "../../routes/Navigation";
import "../../styles/styles.scss";

const Main = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Modal />
          <Header />
          <Navigation />
        </BrowserRouter>
      </Provider>
    </>
  );
};
export default Main;
