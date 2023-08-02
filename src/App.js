import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Product from "./Components/Product";
import { Provider } from "react-redux";
import store from "./Store/Store";


function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/cart" element={<Cart></Cart>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
