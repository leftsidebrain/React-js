import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import About from "./Pages/About";
import Product from "./Pages/Products/Product";
import PrivateRoute from "./Components/PrivateRoute";
import { GlobalContext, GlobalContextProvider } from "./Contexts/GlobalContext";
import Login from "./Pages/Products/Login";
import Cart from "./Components/Cart";
import Register from "./Pages/Products/Register";
function App() {
  // const contohProps = "ini adalah nilai Props";
  return (
    <>
      <BrowserRouter>
        <GlobalContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/Product" element={<Product />} />
            </Route>
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
