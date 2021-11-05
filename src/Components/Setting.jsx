import React from "react";
import AddRoomForm from "./AddRoomForm";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
const Setting=()=>{
    return (
        <>
        <div className="container" style={{marginTop:"120px"}}>
            <div className="row">
                <div className="col-lg-3">
                    <div className="shadow-lg p-3">
                        <div className="">
                        <div className="profile_settng shadow-lg mx-auto">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="img-fluid"/>
                        </div>
                        <h6 className="fw-bold text-center text-muted">Rosan Prasad Chapagain</h6>
                        </div>
                        <div className="profile_setting_option">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link active  mt-2" id="post_room-tab" data-bs-toggle="pill" data-bs-target="#post_room" type="button" role="tab" aria-controls="post_room" aria-selected="true">Post Room</button>
                                <button className="nav-link  mt-2" id="edit_profile-tab" data-bs-toggle="pill" data-bs-target="#edit_profile" type="button" role="tab" aria-controls="edit_profile" aria-selected="false">Edit Account</button>
                                <button className="nav-link  mt-2" id="change_password-tab" data-bs-toggle="pill" data-bs-target="#change_password" type="button" role="tab" aria-controls="change_password" aria-selected="false">Change Password</button>
                                <div className="log_out_btn text-center mt-2">
                                <button className="btn fw-bold w-100 ">Log Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 margin_of_addRoom_post mt-lg-0">
                    <div className="tab-content" id="">
                        <div className="tab-pane fade show active" id="post_room" role="tabpanel" aria-labelledby="post_room-tab">
                            <AddRoomForm />
                        </div>
                        <div className="tab-pane fade" id="edit_profile" role="tabpanel" aria-labelledby="edit_profile-tab">
                            <EditProfile />
                        </div>
                        <div className="tab-pane fade" id="change_password" role="tabpanel" aria-labelledby="change_password-tab">
                            <ChangePassword />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Setting;