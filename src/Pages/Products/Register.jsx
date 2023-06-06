import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [globalState, globalDispatch] = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <div className="containter" style={{ marginTop: "130px" }}>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
              <h1>Register</h1>
              <div className="mb-3 mt-5">
                <input type="text" className="form-control" placeholder="Full Name" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input type="Password" className="form-control" placeholder="Password" />
              </div>
              <div className="mb-3">
                <input type="Password" className="form-control" placeholder="Confirm Password" />
              </div>
              <div className="mb-2 mt-5">
                <button
                  onClick={() => {
                    globalDispatch({
                      type: "PROCESS_LOGIN",
                    });
                    navigate("/");
                  }}
                  className="btn btn-danger w-100"
                >
                  Register
                </button>
              </div>
              <div className="mb-3">
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  Already have an account?{" "}
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/login"
                  >
                    Login Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}
