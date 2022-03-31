import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import './styles/styles.scss';
function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
export default App;
