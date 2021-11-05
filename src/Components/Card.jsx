import react from "react";
const Card = () => {
  return (
    <>
      <div className="col-lg-3 mb-3">
        <div className="card shadow-lg card_price text-dark">
          <h6
            className="shadow-lg fw-bold price text-white animate__animated animate__tada animate__infinite	infinite"
            style={{ fontSize: "14px" }}
          >
            Rs. 12000/-
          </h6>
          <div
            id="room_slider"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active " data-bs-interval="false">
                <img
                  src="http://cdn.home-designing.com/wp-content/uploads/2009/06/bedroom-with-bay-window.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item" data-bs-interval="false">
                <img
                  src="data:image/jpeg;base64,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"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item" data-bs-interval="false">
                <img
                  src="data:image/jpeg;base64,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"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#room_slider"
              data-bs-slide="prev"
            >
              <i className="fas fa-arrow-circle-left"></i>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#room_slider"
              data-bs-slide="next"
            >
              <i className="fas fa-arrow-circle-right "></i>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="card-body px-2 py-2">
            <div className="row">
              <div className="col-lg-12">
                <div className="row fw-bold d-flex justify-content-between" style={{ fontSize: "11px" }}>
                  <div className="col-4 ">
                    <i className="fas fa-store-alt"></i> 1 Room
                  </div>
                  <div className="col-4 text-center">
                    <i className="fas fa-couch"></i> 1 Living
                  </div>
                  <div className="col-4 text-center ">
                    <i className="fas fa-utensils"></i> 1 Kitchen
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" d-flex align-items-center justify-content-between py-2"
              style={{ fontSize: "14px" }}
            >
              <div className="fw-bolder">
                <i className="fas fa-map-marker-alt"></i> Jorpati-4
              </div>
              <div className="fw-bolder">
                <i className="fas fa-toggle-off"></i> Available
              </div>
            </div>
            <div className="d-grid gap-2 big_button">
              <button
                className="btn btn-light shadow-lg fw-bold "
                style={{ fontSize: "14px" }}
              >
                Save for Later
              </button>
              <button
                className="btn btn-light shadow-lg fw-bold "
                data-bs-toggle="modal"
                data-bs-target="#viewDetail"
                style={{ fontSize: "14px" }}
              >
                Detail View
              </button>
            </div>
            <div>
              <div
                className="modal fade shadow-lg border-0"
                id="viewDetail"
                tabIndex={-1}
                aria-labelledby="viewDetail"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header border-0 py-2 ">
                    <div className="room_datail_info_modal">
                    <h6 className="fw-bold text-muted"><i className="fas fa-map-marker-alt"></i> Location : Kathmandu Nepal</h6> 
                     <h6 className="mb-0 fw-bold text-muted"> <i className="far fa-calendar-alt"></i> Date : 2021-12-30</h6>
                    </div>
                      <button
                        type="button"
                        className="btn-close shadow-lg"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-lg-7 ">
                          <div className="row d-flex align-items-start bg-dark">
                            <div className="col-md-4 px-0 tab_img-size order-last order-lg-first mx-auto">
                              <div
                                className="nav row nav-pills margin_of_tab_image_btn"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                              >
                                <button
                                  className="nav-link col-3 col-lg-6 active"
                                  id="pic1-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pic1"
                                  type="button"
                                  role="tab"
                                  aria-controls="pic1"
                                  aria-selected="true"
                                >
                                  <div className="tab_btn">
                                    <img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8Ss6_vn0sZvE1TV146t3oPjiOJ9U36ty6w&usqp=CAU"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </button>
                                <button
                                  className="nav-link col-3 col-lg-6"
                                  id="pic2-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pic2"
                                  type="button"
                                  role="tab"
                                  aria-controls="pic2"
                                  aria-selected="false"
                                >
                                    <div className="tab_btn">
                                      <img
                                        src="http://cdn.home-designing.com/wp-content/uploads/2009/06/bedroom-with-bay-window.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                  </div>
                                </button>
                                <button
                                  className="nav-link col-3 col-lg-6"
                                  id="pic2-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pic2"
                                  type="button"
                                  role="tab"
                                  aria-controls="pic2"
                                  aria-selected="false"
                                >
                                    <div className="tab_btn">
                                      <img
                                        src="http://cdn.home-designing.com/wp-content/uploads/2009/06/bedroom-with-bay-window.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                  </div>
                                </button>
                                <button
                                  className="nav-link col-3 col-lg-6"
                                  id="pic2-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pic2"
                                  type="button"
                                  role="tab"
                                  aria-controls="pic2"
                                  aria-selected="false"
                                >
                                    <div className="tab_btn">
                                      <img
                                        src="http://cdn.home-designing.com/wp-content/uploads/2009/06/bedroom-with-bay-window.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                  </div>
                                </button>
                                <button
                                  className="nav-link col-3 col-lg-6"
                                  id="pic2-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pic2"
                                  type="button"
                                  role="tab"
                                  aria-controls="pic2"
                                  aria-selected="false"
                                >
                                    <div className="tab_btn">
                                      <img
                                        src="http://cdn.home-designing.com/wp-content/uploads/2009/06/bedroom-with-bay-window.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                  </div>
                                </button>
                                <button
                                  className="nav-link col-3 col-lg-6"
                                  id="pic3-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pic3"
                                  type="button"
                                  role="tab"
                                  aria-controls="pic3"
                                  aria-selected="false"
                                >
                                    <div className="tab_btn">
                                      <img
                                        src="http://cdn.home-designing.com/wp-content/uploads/2018/08/modern-master-bedroom-ideas.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                  </div>
                                </button>
                                <button
                                  className="nav-link col-3 col-lg-6"
                                  id="pic4-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pic4"
                                  type="button"
                                  role="tab"
                                  aria-controls="pic4"
                                  aria-selected="false"
                                >
                                  <div className="tab_btn">
                                    <img
                                      src="https://brabbu.com/blog/wp-content/uploads/2014/11/10-OF-THE-MOST-BEAUTIFUL-BEDROOM-LAMPS-WEVE-EVER-SEEN_alrimalvilla..jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </button>
                                <button
                                  className="nav-link col-3 col-lg-6 "
                                  id="pic5-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pic5"
                                  type="button"
                                  role="tab"
                                  aria-controls="pic5"
                                  aria-selected="false"
                                >
                                  <div className="tab_btn">
                                    <img
                                      src="https://i.ytimg.com/vi/VwHtPi17qhs/hqdefault.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div className="col-md-8 px-0">
                              <div
                                className="tab-content"
                                id="v-pills-tabContent"
                              >
                                <div
                                  className="tab-pane fade show active content_img"
                                  id="pic1"
                                  role="tabpanel"
                                  aria-labelledby="pic1-tab"
                                >
                                   <img
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8Ss6_vn0sZvE1TV146t3oPjiOJ9U36ty6w&usqp=CAU"
                                      alt=""
                                      className="img-fluid"
                                    />
                                </div>
                                <div
                                  className="tab-pane fade content_img"
                                  id="pic2"
                                  role="tabpanel"
                                  aria-labelledby="pic2-tab"
                                >
                                     <img
                                        src="http://cdn.home-designing.com/wp-content/uploads/2009/06/bedroom-with-bay-window.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                </div>
                                <div
                                  className="tab-pane fade content_img"
                                  id="pic3"
                                  role="tabpanel"
                                  aria-labelledby="pic3-tab"
                                >
                                 <img 
                                 src="http://cdn.home-designing.com/wp-content/uploads/2018/08/modern-master-bedroom-ideas.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                </div>
                                <div
                                  className="tab-pane fade content_img"
                                  id="pic4"
                                  role="tabpanel"
                                  aria-labelledby="pic4-tab"
                                >
                                   <img
                                      src="https://brabbu.com/blog/wp-content/uploads/2014/11/10-OF-THE-MOST-BEAUTIFUL-BEDROOM-LAMPS-WEVE-EVER-SEEN_alrimalvilla..jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                </div>
                                <div
                                  className="tab-pane fade content_img"
                                  id="pic5"
                                  role="tabpanel"
                                  aria-labelledby="pic5-tab"
                                >
                                  <img
                                      src="https://i.ytimg.com/vi/VwHtPi17qhs/hqdefault.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5">
                         <div className="row">
                           <div className="col-lg-4 p-1 ">
                             <div className="p-2 text-center shadow-lg room_datail_ifno ">
                             <p className="lead fw-bold my-0 padding_info">3</p>
                             <div className=" fw fw-bold padding_info" style={{fontSize:"12px"}}>
                                <i className="fas fa-store-alt"></i> Room
                                </div>
                             </div>
                           </div>
                           <div className="col-lg-4 p-1 ">
                             <div className="p-2 text-center shadow-lg room_datail_ifno ">
                             <p className="lead fw-bold my-0 padding_info">1</p>
                             <div className=" fw fw-bold padding_info" style={{fontSize:"12px"}}>
                             <i className="fas fa-couch"></i> Living
                              </div>
                             </div>
                             </div>
                             <div className="col-lg-4 p-1 ">
                             <div className="p-2 text-center shadow-lg room_datail_ifno ">
                             <p className="lead fw-bold my-0 padding_info">1</p>
                             <div className=" fw fw-bold padding_info" style={{fontSize:"12px"}}>
                             <i className="fas fa-utensils"></i> Kitchen
                              </div>
                             </div>
                             </div>
                             <div className="col-lg-4 p-1 ">
                             <div className="p-2 text-center shadow-lg room_datail_ifno ">
                             <p className="lead fw-bold my-0 padding_info"style={{fontSize:"16px"}}>Ground</p>
                             <div className=" fw fw-bold padding_info" style={{fontSize:"12px"}}>
                             <i className="fas fa-building"></i> Floor
                              </div>
                             </div>
                             </div>
                             <div className="col-lg-4 p-1 ">
                             <div className="p-2 text-center shadow-lg room_datail_ifno ">
                             <p className="lead fw-bold my-0 padding_info"style={{fontSize:"16px"}}>Seperate</p>
                             <div className=" fw fw-bold padding_info" style={{fontSize:"12px"}}>
                             <i className="fas fa-toilet"></i> Toilet
                              </div>
                             </div>
                             </div>
                             <div className="col-lg-4 p-1 ">
                             <div className="p-2 text-center shadow-lg room_datail_ifno ">
                             <p className="lead fw-bold my-0 padding_info"style={{fontSize:"16px"}}>Yes</p>
                             <div className=" fw fw-bold padding_info" style={{fontSize:"12px"}}>
                             <i className="fas fa-tint"></i> Drinking
                              </div>
                             </div>
                             </div>
                             <div className="col-lg-6 p-1 ">
                             <div className="p-2 text-center shadow-lg room_datail_ifno ">
                             <p className="lead fw-bold my-0 padding_info"style={{fontSize:"16px"}}>Twice of month</p>
                             <div className=" fw fw-bold padding_info" style={{fontSize:"12px"}}>
                             <i className="fas fa-faucet"></i> Water
                              </div>
                             </div>
                             </div>
                             <div className="col-lg-6 p-1 ">
                             <div className="p-2 text-center shadow-lg room_datail_ifno ">
                             <p className="lead fw-bold my-0 padding_info"style={{fontSize:"16px"}}>Big Vehicle</p>
                             <div className=" fw fw-bold padding_info" style={{fontSize:"12px"}}>
                             <i className="fas fa-car"></i> Parking
                              </div>
                             </div>
                             </div>
                             <div className="col-lg-6 p-1 ">
                             <div className="p-2 text-center shadow-lg room_datail_ifno ">
                             <p className="lead fw-bold my-0 padding_info"style={{fontSize:"16px"}}>Available</p>
                             <div className=" fw fw-bold padding_info" style={{fontSize:"12px"}}>
                             <i className="fas fa-toggle-on"></i> Status
                              </div>
                             </div>
                             </div>
                             <div className="col-lg-6 p-1 ">
                             <div className="p-2 text-center shadow-lg room_datail_ifno ">
                             <p className="lead fw-bold my-0 padding_info" style={{fontSize:"16px"}}>100000</p>
                             <div className=" fw fw-bold padding_info" style={{fontSize:"12px"}}>
                             <i className="fas fa-dollar-sign"></i> Price Rs
                              </div>
                             </div>
                             </div>
                         </div>
                        </div>
                      </div>
                      <div className="room_datail_info_modal my-4 my-lg-2 p-3 p-lg-2 shadow-lg">
                        <h5 style={{textDecoration:" underline"}} className="fw-bold">Contact Information :</h5>
                        <div className="col-lg-12 pb-0">
                        <div className="row">
                          <div className="col-lg-4">
                           <h6 className="fw-bold text-muted"><i className="fas fa-user"></i> Name : Suajan Chapagain</h6>
                           </div> 
                          <div className="col-lg-4">
                          
                           <h6 className="fw-bold text-muted"><i className="fas fa-phone-volume"></i> Contact : 9800000000</h6> 
                          </div>
                          <div className="col-lg-4 big_button text-end">
                          <button
                        type="button"
                        className="btn btn-light shadow-lg fw-bold"
                        style={{ fontSize: "14px" }}
                      >
                        Save for Later
                      </button>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
