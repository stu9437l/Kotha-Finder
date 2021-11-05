import React from "react";
import {useHistory} from "react-router-dom"
const LoginForm = () => {
    let history=useHistory();
    const handleRegister=()=>{
        history.push("/register")
    }
  return (
    <>
      <div className="container margin_top_log_form" >
        <div className="row ">
          <div className="col-lg-8 mx-auto ">
            <div
              className="register_login_div shadow-lg rounded-3 padding_log_form"
            >
              <div className="col-lg-4 ms-5">
                <div className="sidebar_register_res">
                <h5 className="fw-bold text-muted text-center">
                  Don't have an Account ?
                </h5>
                <div className="big_button text-center">
                  <button className="btn btn-light shadow-lg fw-bold " onClick={handleRegister}>
                  <i class="far fa-paper-plane"></i> Register
                  </button>
                </div>
                </div>
              </div>
              <div className="register_form ">
                <div className="row">
                  <div className="col-lg-12 p-3">
                    <div className="p-3 shadow-lg rounded-3 bg-light">
                      <div className="text-center">
                        <h5 className="fw-bold text-muted text-center">
                          ROOM FINDER
                        </h5>
                        <div className="login_form_icon mx-auto shadow-lg">
                          <img
                            src="https://www.logoarena.com/contestimages/public_new/7027/14449_1462626744_theroom.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <h5 className="fw-bold text-muted text-center border-bottom mt-2">
                          Sign In Now
                        </h5>
                      </div>

                      <form action="">
                        <div className="row align-items-center">
                          <div className="col-2 me-0 pe-0">
                            <div className="shadow-lg rounded-circle register_icon ">
                              <label htmlFor="l_email">
                                <i className="far fa-envelope"></i>
                              </label>
                            </div>
                          </div>
                          <div className="col-10 ms-0 ps-0">
                            <input
                              type="email"
                              name="l_email"
                              id="l_email"
                              className="form-control shadow-lg fw-bold text-dark text-center"
                              placeholder="Enter Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="row align-items-center mt-2">
                          <div className="col-2 me-0 pe-0">
                            <div className="shadow-lg rounded-circle register_icon ">
                              <label htmlFor="l_password">
                                <i className="fas fa-unlock-alt"></i>
                              </label>
                            </div>
                          </div>
                          <div className="col-10 ms-0 ps-0">
                            <input
                              type="password"
                              name="l_password"
                              id="l_password"
                              className="form-control shadow-lg fw-bold text-dark text-center"
                              placeholder="Enter Password"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-10 text-center big_button mt-2 ms-auto ms-0 ps-0">
                            <button className="btn btn-light shadow-lg  fw-bold w-100">
                              Login <i class="fas fa-sign-in-alt"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="mt-2 text-end big_button">
                          <button
                            className="btn btn-light shadow-lg fw-bold btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#enterEmail"
                          >
                            Forget Password
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="enterEmail"
                tabIndex={-1}
                aria-labelledby="enterEmailLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-sm">
                  <div className="modal-content">
                    <div className="modal-header border-0">
                      <h5
                        className="modal-title fw-bold text-muted border-bottom"
                        id="enterEmailLabel"
                      >
                       Forgot Password
                      </h5>
                      <button
                        type="button"
                        className="btn-close shadow-lg"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <form action="">
                        <div className="row align-items-center">
                          <div className="col-2 me-0 pe-0">
                            <div className="shadow-lg rounded-circle register_icon ">
                              <label htmlFor="forget_email">
                                <i className="far fa-envelope"></i>
                              </label>
                            </div>
                          </div>
                          <div className="col-10">
                            <input
                              type="email"
                              name="forget_email"
                              id="forget_email"
                              className="form-control shadow-lg fw-bold text-dark text-center"
                              placeholder="Enter Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-10 text-center big_button mt-2 ms-auto ">
                            <button className="btn btn-light shadow-lg  fw-bold w-100"
                            data-bs-toggle="modal"
                            data-bs-target="#enterOTP">
                              Sent OTP
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="enterOTP"
                tabIndex={-1}
                aria-labelledby="enterOTPLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-sm">
                  <div className="modal-content">
                    <div className="modal-header border-0">
                      <h5
                        className="modal-title fw-bold text-muted border-bottom"
                        id="enterOTPLabel"
                      >
                        Email Verification
                      </h5>
                      <button
                        type="button"
                        className="btn-close shadow-lg"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <form action="">
                        <div className="row align-items-center">
                          <div className="col-2 me-0 pe-0">
                            <div className="shadow-lg rounded-circle register_icon ">
                              <label htmlFor="otp_number">
                              <i class="fas fa-info"></i>                              </label>
                            </div>
                          </div>
                          <div className="col-10">
                            <input
                              type="number"
                              name="otp_number"
                              id="otp_number"
                              className="form-control shadow-lg fw-bold text-dark text-center"
                              placeholder="Enter OTP"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-10 text-center big_button mt-2 ms-auto ">
                            <button className="btn btn-light shadow-lg  fw-bold w-100"
                             data-bs-toggle="modal"
                             data-bs-target="#resetPassword"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="resetPassword"
                tabIndex={-1}
                aria-labelledby="resetPasswordLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-sm">
                  <div className="modal-content">
                    <div className="modal-header border-0">
                      <h5
                        className="modal-title fw-bold text-muted border-bottom"
                        id="resetPassword"
                      >
                        Reset Password
                      </h5>
                      <button
                        type="button"
                        className="btn-close shadow-lg"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <form action="">
                        <div className="row align-items-center">
                          <div className="col-2 me-0 pe-0">
                            <div className="shadow-lg rounded-circle register_icon ">
                              <label htmlFor="reset_password">
                              <i className="fas fa-unlock-alt"></i>
                              </label>
                            </div>
                          </div>
                          <div className="col-10">
                            <input
                              type="email"
                              name="reset_password"
                              id="reset_password"
                              className="form-control shadow-lg fw-bold text-dark text-center"
                              placeholder=" New Password"
                              required
                            />
                          </div>
                        </div>
                        <div className="row align-items-center mt-2">
                          <div className="col-2 me-0 pe-0">
                            <div className="shadow-lg rounded-circle register_icon ">
                              <label htmlFor="reset_confirm_password">
                              <i className="fas fa-lock"></i>                              </label>
                            </div>
                          </div>
                          <div className="col-10">
                            <input
                              type="email"
                              name="reset_confirm_password"
                              id="reset_confirm_password"
                              className="form-control shadow-lg fw-bold text-dark text-center"
                              placeholder="Confirm New Password"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-10 text-center big_button mt-2 ms-auto ">
                            <button className="btn btn-light shadow-lg  fw-bold w-100"
                            >
                              Reset Password
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
                <h5 className="fw-bold text-muted text-center">
                  Don't have an Account ?
                </h5>
                <div className="big_button text-center">
                  <button className="btn btn-light shadow-lg fw-bold " onClick={handleRegister}>
                  <i class="far fa-paper-plane"></i> Register
                  </button>
                </div>
      </div>
      </div>
      </div>
       
      </div>
    </>
  );
};
export default LoginForm;
