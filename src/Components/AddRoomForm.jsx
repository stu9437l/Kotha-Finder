import React,{useState ,useEffect}  from "react";
import mainImage from "./upload_main_room.jpg";


const AddRoomForm=()=>{
    const [initialmage, setInitialmage] = useState(mainImage)
    return(
        <>
        <div className="container py-3 add_room_form shadow-lg">
            <div className="row">
                <h4 className=" fw-bolder text-muted border-bottom">Add New Room</h4>
                <form action="" >
                    <div className="row">
                    <div className="col-md-4 overflow-hidden">
                    <div className="" >
                    <div className="uploadMainPhoto shadow-lg mx-auto">
                        <img src={initialmage} alt="" />
                    </div>
                    <div className="upload_photo" >
                    <input type="file" className="form-control d-none" id="main" accept="image/*" onChange={
                        (e)=>{
                            const reader =new FileReader();
                            reader.onload=()=>{
                                if(reader.readyState===2){setInitialmage([reader.result])}}
                            console.log(e.target.files[0])
                            reader.readAsDataURL(e.target.files[0]);}
                    } 
                    />
                    <label htmlFor="main" className="btn text-center fw-bold border rounded-0 add_mainroom_img text-muted d-block mt-2 ">Upload main image</label>
                    </div>
                    </div>
                     <div className="row mt-4 mb-2 px-lg-2">
                         <input type="file" className="form-control fw-bold text-center" multiple style={{fontSize:"12px"}}/>
                     </div>
                    </div>
                    <div className="col-md-8 add_room_form_label ">
                        <div className="row ">
                        <div className="col-md-6 px-0 px-lg-3 mb-2 mb-lg-0">
                            <div className="row align-items-center">
                            <div className="col-3 col-md-4 px-lg-0 mx-lg-0 "><label htmlFor="room_number"><i className="fas fa-store-alt"></i> Rooms :</label></div>
                            <div className="col-9 col-md-8 "><input type="number" min="0" className="form-control text-center fw-bold px-0" id="room_number" placeholder="Number of room" style={{fontSize:"12px"}} autoFocus/></div>
                       </div>
                       </div>
                       <div className="col-md-6 px-0 px-lg-3">
                       <div className="row align-items-center">
                            <div className="col-3 col-md-4 px-lg-0 mx-lg-0 "><label htmlFor="living_number"><i className="fas fa-couch"></i> Living :</label></div>
                            <div className="col-9 col-md-8 "><input type="number" min="0" className="form-control text-center  fw-bold px-0" id="living_number" placeholder="Number of living" style={{fontSize:"12px"}}/></div>
                       </div>
                        </div>
                        </div>
                        <div className="row mt-2">
                        <div className="col-md-6 px-0 px-lg-3 mb-2 mb-lg-0">
                            <div className="row align-items-center">
                            <div className="col-3 col-md-4 px-lg-0 mx-lg-0"><label htmlFor="kitchen_number"><i className="fas fa-utensils"></i> Kitchen :</label></div>
                            <div className="col-9 col-md-8  "><input type="number" min="0" className="form-control text-center fw-bold px-0" id="kitchen_number" placeholder="Number of kitchen" style={{fontSize:"12px"}}/></div>
                       </div>
                       </div>
                       <div className="col-md-6 px-0 px-lg-3">
                       <div className="row align-items-center">
                            <div className="col-3 col-md-4 px-lg-0 mx-lg-0"><label htmlFor="floor_number"><i className="fas fa-building"></i> Floor :</label></div>
                            <div className="col-9 col-md-8">
                                <select name="" id="floor_number" className="form-control text-center fw-bold px-0" style={{fontSize:"12px"}}>
                                <option value="select">--Select floor--</option>
                                    <option value="Ground Floor">Ground</option>
                                    <option value="First Floor">First</option>
                                    <option value="Second Floor">Second</option>
                                    <option value="Third Floor">Third</option>
                                    <option value="Fourth Floor">Fourth</option>
                                    <option value="Fifth Floor">Fifth</option>
                                    <option value="Sixth Floor">Sixth</option>
                                    <option value="Seventh Floor">6 +</option>
                                </select>
                            </div>
                       </div>
                        </div>
                        </div>
                        <div className="row mt-2 ">
                        <div className="col-md-6 px-0 px-lg-3 mb-2 mb-lg-0">
                       <div className="row align-items-center">
                            <div className="col-3 col-md-4 px-lg-0 mx-lg-0"><label htmlFor="parking"><i className="fas fa-car"></i> Parking :</label></div>
                            <div className="col-9 col-md-8">
                                <select name="" id="parking" className="form-control text-center fw-bold px-0" style={{fontSize:"12px"}}>
                                <option value="select">--Select Parking --</option>
                                    <option value="no">No</option>
                                    <option value="car-only">Car Only</option>
                                    <option value="bike-only">Bike Only</option>
                                    <option value="cycle-only">Cycle Only</option>
                                    <option value="big-vehicle">Big Vehicle</option>
                                    <option value="available">Available</option>
                                </select>
                            </div>
                       </div>
                        </div>             
                       <div className="col-md-6 px-0 px-lg-3 ">
                           <div className="row align-items-center">
                           <div className="col-3 col-md-4 px-lg-0 mx-lg-0"><label htmlFor="water"><i className="fas fa-faucet"></i> Water :</label></div>
                            <div className="col-9 col-md-8 ">
                                <select name="" id="water" className="form-control text-center fw-bold px-0" style={{fontSize:"12px"}}>
                                <option value="select">--Select water level--</option>
                                <option value="always">Always</option>
                                    <option value="daily">Daily</option>
                                    <option value="twice">Twice of week</option>
                                    <option value="thrice">Thrice of week</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="2-weeks">Twice of month</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="no">Not Available</option>
                                </select>
                            </div>
                           </div>
                      
                       </div>
                        </div>
                        <div className="row mt-2 ">
                        <div className="col-md-6 px-0 px-lg-3 mb-2 mb-lg-0">
                            <div className="row  align-items-center">
                            <div className="col-3 col-md-4 px-lg-0 mx-lg-0"><label htmlFor="toilet_number"><i className="fas fa-toilet"></i> Toilet :</label></div>
                            <div className="col-9 col-md-8 d-flex justify-content-around justify-content-lg-between align-items-center"> 
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="toilet"  id="seperate" value="option1" checked />
                            <label className="form-check-label" htmlFor="seperate">
                                Seperate
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="toilet" id="attached" value="option2"/>
                            <label className="form-check-label" htmlFor="atttached">
                                Sharing
                            </label>
                            </div>
                         </div>
                       </div>
                       </div>
                       <div className="col-md-6 px-0 px-lg-3">
                            <div className="row align-items-center">
                            <div className="col-3 col-md-4 px-lg-0 mx-lg-0"><label htmlFor="toilet_number"><i className="fas fa-tint"></i> Drinking :</label></div>
                            <div className="col-9 col-md-8  d-flex justify-content-around justify-content-lg-between align-items-center"> 
                            <div className="form-check padding_left_yes" >
                            <input className="form-check-input" type="radio" name="drinking-water"  id="drink_water_yes" value="option1" checked />
                            <label className="form-check-label" htmlFor="drink_water_yes">
                                Yes
                            </label>
                            </div>
                            <div className="form-check padding_left_no" >
                            <input className="form-check-input " type="radio" name="drinking-water" id="drink_water_no" value="option2"/>
                            <label className="form-check-label" htmlFor="drink_water_no">
                                No
                            </label>
                            </div>
                         </div>
                       </div>
                       </div>
                        </div>
                        <div className="row mt-2">
                        <div className="col-md-6 px-0 px-lg-3 mb-2 mb-lg-0">
                            <div className="row align-items-center">
                            <div className="col-3 col-md-4 px-lg-0 mx-lg-0"><label htmlFor="location"><i className="fas fa-map-marker-alt"></i> Location:</label></div>
                            <div className="col-9 col-md-8 "><input type="text" className="form-control text-center fw-bold px-0" id="location" placeholder="Enter location" style={{fontSize:"12px"}}/></div>
                       </div>
                       </div>
                       <div className="col-md-6 px-0 px-lg-3">
                       <div className="row align-items-center">
                            <div className="col-3 col-md-4 px-lg-0 mx-lg-0"><label htmlFor="price"><i className="fas fa-dollar-sign"></i> Price Rs :</label></div>
                            <div className="col-9 col-md-8  "><input type="text"  className="form-control text-center fw-bold px-0" id="price" placeholder="Enter Price" style={{fontSize:"12px"}}/></div>
                       </div>
                        </div>
                        </div>
                        <div className="row mt-2">
                                     <div className="col-3 col-md-2 px-0 mx-0 px-lg-0 mx-lg-0 mb-2 mb-lg-0"><label htmlFor="room_status"><i className="fas fa-toggle-on"></i> Status :</label>
                                         </div>
                                     <div className="col-9 col-md-10 padding_of_status_addroom">
                                     <select name="" id="room_status" className={`form-control text-center  fw-bold `}style={{fontSize:"12px"}} >
                                         <option value="room_available" >Available</option>
                                         <option value="room_Booked">Booked</option>
                                         </select>                          
                             </div>
                           
                        </div>
                        <div className="row mt-2 ">
                            <div className="col-md-6 px-0 px-lg-3 ms-auto">
                                <div className="row align-items-center ">
                                   <div className="col-3 col-md-4 px-lg-0 mx-lg-0"><label htmlFor="room_status"><i className="far fa-calendar-alt"></i> Date :</label>
                                         </div>
                                     <div className="col-9 col-md-8">
                                    <input type="date" className="form-control fw-bold text-center" style={{fontSize:"12px"}}/>                         
                             </div>
                             </div>
                            </div>
                        </div>
                        <h4 className="px-0 mx-0 border-bottom mt-4 mt-lg-0">Contact Info :</h4>
                      <div className="row">
                          <div className="col-md-6 px-0 px-lg-3 mb-2 mb-lg-0">
                              <div className="row align-items-center">
                              <div className="col-3 col-md-4 px-lg-0 mx-lg-0 ">
                                  <label htmlFor="owner_name"><i className="fas fa-user"></i> Name :</label>
                              </div>
                              <div className="col-9 col-md-8">
                                  <input type="text" id="owner_name" className="form-control text-center fw-bold px-0"  placeholder="Enter Benifial Name" style={{fontSize:"12px"}}/>
                              </div>
                              </div>
                              </div>
                              <div className="col-md-6 px-0 px-lg-3-md-6">
                              <div className="row align-items-center">
                              <div className="col-3 col-md-4 px-lg-0 mx-lg-0">
                                  <label htmlFor="owner_contact"><i className="fas fa-phone-volume"></i> Contact :</label>
                              </div>
                              <div className="col-9 col-md-8">
                                  <input type="text" id="owner_contact" className="form-control text-center fw-bold px-0" placeholder="Enter Benifial Number" style={{fontSize:"12px"}}/>
                              </div>
                              </div>
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
export default AddRoomForm;