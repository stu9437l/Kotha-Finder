import React from "react";
import { useHistory } from "react-router-dom";

function Register() {
    let history=useHistory();
    const handleLogIn=()=>{
      history.push("/login")
    }
    
  return (
    <>
      <div className="container margin_top_register_form">
        <div className="row ">
          <div className="col-lg-8 mx-auto " >
            <div className="register_login_div shadow-lg rounded-3 padding_log_register_form">
            <div className="col-6 ">
              <div className="sidebar_register_res">
              <h5 className="fw-bold text-muted text-center font_size_res">Have an Account </h5>
              <div className="big_button text-center">
                <button className="btn btn-light shadow-lg fw-bold " onClick={handleLogIn}>
                <i class="far fa-paper-plane"></i> Log In
                </button>
              </div>
              </div>
            </div>
            <div className="register_form ">
              <div className="row">
                <div className="col-lg-12 p-3">
                  <div className="p-3 shadow-lg rounded-3 bg-light">
                    <h5 className="fw-bold text-muted text-center border-bottom">
                      Register Now
                    </h5>
                    <form action="">
                      <div className="row align-items-center">
                        <div className="col-2 me-0 pe-0">
                          <div className="shadow-lg rounded-circle register_icon ">
                            <label htmlFor="r_fullname">
                            <i className="far fa-user"></i>
                            </label>
                          </div>
                        </div>
                        <div className="col-10 ms-0 ps-0">
                          <input
                            type="text"
                            name="r_fullname"
                            id="r_fullname"
                            className="form-control shadow-lg fw-bold text-dark text-center"
                            placeholder="Enter Fullame"
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-2 align-items-center">
                        <div className="col-2 me-0 pe-0">
                          <div className="shadow-lg rounded-circle register_icon ">
                            <label htmlFor="r_email">
                              <i className="far fa-envelope"></i>
                            </label>
                          </div>
                        </div>
                        <div className="col-10 ms-0 ps-0">
                          <input
                            type="email"
                            name="r_email"
                            id="r_email"
                            className="form-control shadow-lg fw-bold text-dark text-center"
                            placeholder="Enter Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-2 align-items-center">
                        <div className="col-2 me-0 pe-0">
                          <div className="shadow-lg rounded-circle register_icon ">
                            <label htmlFor="r_contact">
                              <i className="fas fa-phone"></i>
                            </label>
                          </div>
                        </div>
                        <div className="col-10 ms-0 ps-0">
                          <input
                            type="phone"
                            name="r_contact"
                            id="r_contact"
                            className="form-control shadow-lg fw-bold text-dark text-center"
                            placeholder="Enter Mobile Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="row align-items-center mt-2">
                        <div className="col-2 me-0 pe-0">
                          <div className="shadow-lg rounded-circle register_icon ">
                            <label htmlFor="r_password">
                              <i className="fas fa-unlock-alt"></i>
                            </label>
                          </div>
                        </div>
                        <div className="col-10 ms-0 ps-0">
                          <input
                            type="password"
                            name="r_password"
                            id="r_password"
                            className="form-control shadow-lg fw-bold text-dark text-center"
                            placeholder="Enter Password"
                            required
                          />
                        </div>
                      </div>
                      <div className="row align-items-center mt-2">
                        <div className="col-2 me-0 pe-0">
                          <div className="shadow-lg rounded-circle register_icon ">
                            <label htmlFor="r_confirm-password">
                            <i className="fas fa-lock"></i>                           
                             </label>
                          </div>
                        </div>
                        <div className="col-10 ms-0 ps-0">
                          <input
                            type="password"
                            name="r_confirm-password"
                            id="r_confirm-password"
                            className="form-control shadow-lg fw-bold text-dark text-center"
                            placeholder="Enter Confirm Password"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-10 ms-auto text-center big_button ps-0">
                        <button className="btn btn-light shadow-lg mt-2 fw-bold w-100">
                          Submit <i class="fas fa-sign-in-alt"></i>
                        </button>
                      </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
      <div className="navbtnform shadow-lg">
              <h5 className="fw-bold text-muted text-center ">Have an Account </h5>
              <div className="big_button text-center">
                <button className="btn btn-light shadow-lg fw-bold " onClick={handleLogIn}>
                <i class="far fa-paper-plane"></i> Log In
                </button>
              </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Register;
