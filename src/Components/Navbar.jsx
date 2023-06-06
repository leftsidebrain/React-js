import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../Contexts/GlobalContext";
import { useContext } from "react";

export default function Navbar() {
  const [globalState, globalDispatch] = useContext(GlobalContext);
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "brown" }}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Product" className="nav-link">
                  Product
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {globalState.isLogin ? (
                <>
                  <li>
                    <Link to="/cart">
                      <div
                        style={{
                          position: "relative",
                          display: "block",
                          width: "30px",
                          overflow: "hidden",
                          top: "4px",
                        }}
                      >
                        {globalState.dataCarts.length > 0 ? (
                          <>
                            <span
                              style={{
                                position: "absolute",
                                top: "0",
                                right: "0",
                                zIndex: "2",
                                borderRadius: "4px",
                                backgroundColor: "red",
                                width: "19px",
                                height: "14px",
                                color: "white",
                                fontSize: "10px",
                                lineHeight: "16px",
                                display: "block",
                                textAlign: "center",
                                fontFamily: "sans-serif",
                              }}
                            >
                              {globalState.dataCarts.length}
                            </span>
                          </>
                        ) : (
                          <></>
                        )}

                        <svg
                          style={{
                            position: "relative",
                            top: "1px",
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="25"
                          fill="white"
                          class="bi bi-cart"
                          viewBox="0 0 18 15"
                        >
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Hello, Admin
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            globalDispatch({
                              type: "PROCESS_LOGOUT",
                            });
                          }}
                          className="dropdown-item"
                          href="#"
                        >
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" aria-current="page">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ marginTop: "55px" }}></div>
    </>
  );
}
