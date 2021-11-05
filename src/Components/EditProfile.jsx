import React, { useState } from 'react'
import InitialProfileEditPhoto from "./upload_main_room.jpg" ;

function EditProfile() {
    const [edit_profile_photo1, setedit_profile_photo1] = useState(InitialProfileEditPhoto);
    const [edit_fullname, setedit_fullname] = useState("");
    const [edit_email,setedit_email]=useState("");
    const [edit_contact,setedit_contact]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        e.target.reset();
    }
    const handleReset=(e)=>{
             setedit_fullname("")
             setedit_profile_photo1(InitialProfileEditPhoto)
             setedit_email("")
             setedit_contact("")
    }
    return (
      <>
      <div className="container shadow-lg py-3">
          <div className="row">
              <h4 className="fw-bold border-bottom text-muted">Edit Profile</h4>
              <div className="col-lg-4">
              <div className="" >
                    <div className="edit_profile_photo shadow-lg mx-auto">
                        <img src={edit_profile_photo1} alt="" />
                    </div>
                    <div className="" >
                    <input type="file" className="form-control d-none" id="profile_edit_user" accept="image/*" onChange={
                        (e)=>{
                            const reader =new FileReader();
                            reader.onload=()=>{
                                if(reader.readyState===2){setedit_profile_photo1([reader.result])}}
                            console.log(e.target.files[0])
                            reader.readAsDataURL(e.target.files[0]);}
                    } 
                    />
                    <label htmlFor="profile_edit_user" className="btn text-center fw-bold border rounded-0 add_mainroom_img text-muted d-block mt-2 ">Choose Photo</label>
                    </div>
                    </div>
              </div>
              <div className="col-lg-8 mt-4">
                  <h5 className="fw-bold text-muted">Personal Info:</h5>
                  <form action="" onSubmit={handleSubmit}>
                  <div className="row align-items-center">
                        <div className="col-2 me-0 pe-0">
                          <div className="shadow-lg rounded-circle register_icon ">
                            <label htmlFor="edit_fullname">
                            <i className="far fa-user"></i>
                            </label>
                          </div>
                        </div>
                        <div className="col-10 ms-0 ps-0">
                          <input
                            type="text"
                            name="edit_fullname"
                            value={edit_fullname}
                            id="edit_fullname"
                            className="form-control shadow-lg fw-bold text-dark text-center"
                            placeholder="New Fullame"
                            onChange={
                                (e)=>{
                                 setedit_fullname(e.target.value);
                                }
                            }
                          />
                        </div>
                      </div>
                      <div className="row mt-2 align-items-center">
                        <div className="col-2 me-0 pe-0">
                          <div className="shadow-lg rounded-circle register_icon ">
                            <label htmlFor="edit_email">
                              <i className="far fa-envelope"></i>
                            </label>
                          </div>
                        </div>
                        <div className="col-10 ms-0 ps-0">
                          <input
                            type="email"
                            name="edit_email"
                            id="edit_email"
                            value={edit_email}
                            className="form-control shadow-lg fw-bold text-dark text-center"
                            placeholder="New Email"
                            onChange={(e)=>{
                                setedit_email(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mt-2 align-items-center">
                        <div className="col-2 me-0 pe-0">
                          <div className="shadow-lg rounded-circle register_icon ">
                            <label htmlFor="edit_contact">
                              <i className="fas fa-phone"></i>
                            </label>
                          </div>
                        </div>
                        <div className="col-10 ms-0 ps-0">
                          <input
                            type="phone"
                            name="edit_contact"
                            id="edit_contact"
                            value={edit_contact}
                            className="form-control shadow-lg fw-bold text-dark text-center"
                            placeholder="New Mobile Number"
                            onChange={(e)=>{
                                setedit_contact(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-10 ms-auto text-center big_button ps-0">
                          <div className="row">
                              <div className="col-lg-6">
                                   <button className="btn btn-light shadow-lg mt-2 fw-bold w-100 ">
                                    Save Changes <i class="fas fa-sign-in-alt"></i>
                                    </button>
                              </div>
                              <div className="col-lg-6">
                                   <button className="btn btn-light shadow-lg mt-2 fw-bold w-100" onClick={handleReset}>
                                       Reset <i class="fas fa-sync-alt"></i>
                                    </button>
                              </div>
                          </div>
                       
                        
                      </div>
                      </div>
                  </form>
              </div>
              
          </div>
      </div>
      </>
    )
}

export default EditProfile;
