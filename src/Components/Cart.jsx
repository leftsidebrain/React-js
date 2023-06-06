import React from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import { useContext } from "react";
import { formatRupiah } from "../Config/Config";

export default function Cart() {
  const [globalState, globalDispatch] = useContext(GlobalContext);
  const handleAdd = (id) => {
    globalDispatch({
      type: "ADD_PRODUCT_TO_CART",
      data: {
        id: id,
      },
    });
  };

  const handleSubstract = (id) => {
    globalDispatch({
      type: "SUBSTRACT_FROM_CHART",
      data: {
        id: id,
      },
    });
  };

  const handleDelete = (id) => {
    globalDispatch({
      type: "REMOVE_FROM_CHART",
      data: {
        id: id,
      },
    });
  };

  return (
    <div style={{ marginTop: "100px" }} className="container">
      {globalState.dataCarts.length > 0 ? (
        <>
          <ul className="list-group gap-5">
            {globalState.dataCarts.map((item, index) => {
              return (
                <div key={index}>
                  <li className="list-group-item">
                    <img style={{ width: "150px", objectFit: "cover", borderRadius: "50%" }} src={require("../img/" + item.img)} alt="" />
                    <p>{item.productName}</p>
                    <p>Harga : {formatRupiah(item.price)}</p>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="input-group mb-3">
                          <span
                            onClick={() => {
                              handleSubstract(item.id);
                            }}
                            className="input-group-text btn btn-danger"
                          >
                            -
                          </span>
                          <input type="text" className="form-control text-center" value={item.qty} />
                          <span onClick={() => handleAdd(item.id)} className="input-group-text btn btn-success">
                            +
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-1">
                        <button
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <div className="alert alert-danger">Keranjang Kosong</div>
        </>
      )}
    </div>
  );
}
