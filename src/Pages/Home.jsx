import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { dataProduct } from "./Products/DataProduct";
import { formatRupiah } from "../Config/Config";
import { GlobalContext } from "../Contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [searchResultsDataProduct, setSearchResultsDataProduct] = useState(dataProduct);
  const [globalState, globalDispatch] = useContext(GlobalContext);
  const handleLogin = () => {
    globalDispatch({
      type: "PROCESS_LOGIN",
    });
  };

  const navigate = useNavigate();
  const handleOrder = (id) => {
    if (globalState.isLogin) {
      const dataById = searchResultsDataProduct.find((item) => item.id === id);
      globalDispatch({
        type: "ADD_PRODUCT_TO_CART",
        data: dataById,
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <h2>Home </h2>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require("../img/1.jpg")} className="d-block w-100" alt="..." style={{ height: "300px", width: "auto", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src={require("../img/2.jpg")} className="d-block w-100" alt="..." style={{ height: "300px", width: "auto", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src={require("../img/3.jpg")} className="d-block w-100" alt="..." style={{ height: "300px", width: "auto", objectFit: "cover" }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mb-5">
        <h1 className="mt-4" style={{ color: "#BF3919" }}>
          {/* Let's Order {globalState.dataUser.fullname} */}
        </h1>

        <div className="mt-5">
          {/* <div className="row mb-3">
            <div className="col-lg-9"> */}
          <h1>Data Product</h1>{" "}
          {/* <button className="btn btn-success" onClick={handleLogin}>
            Login
          </button> */}
          {/* </div>
          </div> */}
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {searchResultsDataProduct.map((item, index) => {
              return (
                <div key={index} className="col">
                  <div className="card h-100 shadow">
                    <img src={require("../img/" + item.img)} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.productName}</h5>
                      <p className="card-text">{formatRupiah(item.price)}</p>
                      <div className="row">
                        <div className="col-lg-6">
                          <button className="btn btn-secondary w-100">Detail</button>
                        </div>
                        <div className="col-lg-6">
                          <button
                            onClick={() => {
                              handleOrder(item.id);
                            }}
                            className="btn btn-danger w-100"
                          >
                            Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <pre>{JSON.stringify(globalState.dataCarts, null, 2)}</pre>
    </div>
  );
}
