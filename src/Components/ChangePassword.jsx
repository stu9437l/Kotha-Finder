import React from 'react'

function ChangePassword() {
    return (
        <>          <div className="container shadow-lg py-3">
                     <div className="row">
                         <h5 className="fw-bold text-muted border-bottom">Change Password</h5>
                     <form action="">
                         <div className="row">
                             <div className="col-10 col-lg-4 offset-2 offset-lg-0 ps-0 px-lg-0 ">
                                 <div className="changepassword-image shadow-lg mx-auto">
                                     <img src="https://w7.pngwing.com/pngs/706/615/png-transparent-password-strength-computer-icons-information-microsoft-change-microsoft-computer-icons-logos.png" alt="" className="img-fluid" />
                                 </div>
                             </div>
                             <div className=" col-lg-8">
                             <div className="row align-items-center mt-2">
                        <div className="col-2 me-0 pe-0">
                          <div className="shadow-lg rounded-circle register_icon">
                            <label htmlFor="edit_change_password">
                              <i className="fas fa-unlock-alt"></i>
                            </label>
                          </div>
                        </div>
                        <div className="col-10 ms-0 ps-0">
                          <input
                            type="password"
                            name="edit_change_password"
                            id="edit_change_password"
                            className="form-control shadow-lg fw-bold text-dark text-center"
                            placeholder="New Password"
                            required
                          />
                          
                        </div>
                      </div>
                      <div className="row align-items-center mt-2">
                        <div className="col-2 me-0 pe-0">
                          <div className="shadow-lg rounded-circle register_icon ">
                            <label htmlFor="change_confirm-password">
                            <i className="fas fa-lock"></i>                           
                             </label>
                          </div>
                        </div>
                        <div className="col-10 ms-0 ps-0">
                          <input
                            type="password"
                            name="change_confirm-password"
                            id="change_confirm-password"
                            className="form-control shadow-lg fw-bold text-dark text-center"
                            placeholder="Confirm New Password"
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
                             </div>
                         </div>
                    
                      </form>
                      </div>
                      </div>

        </>
    )
}

export default ChangePassword;
