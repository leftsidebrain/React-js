import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import About from "./Pages/About";
import Product from "./Pages/Products/Product";
import PrivateRoute from "./Components/PrivateRoute";
function App() {
  const props = "nilai Props";
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About nilaiProps={props} />} />
          <Route element={<PrivateRoute />}>
            <Route path="/Product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
