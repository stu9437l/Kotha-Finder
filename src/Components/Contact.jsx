import React from 'react';
import emailjs from "emailjs-com"

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gbbqsyy', 'template_07ctg3p',e.target, 'user_DhNZJTZpgGUdofLJpuOQ4')
          .then((result) => {
              alert("Your Message send Successfully")
          }, (error) => {
              alert(error.messages)
          });
          e.target.reset();
      };
    return (
        <div className="container margin_top_res">
            <div className="row align-items-center">
                <div className="col-lg-6 p-3">
                    <div className=" shadow-lg rounded-3 p-3 bg-light">
                    <div className="contact_background p-3 shadow-lg rounded-3">
                        <div className="social_icon_title mx-auto shadow-lg">
                        <i className="fas fa-wifi"></i>
                        </div>
                        <h6 className="fw-bold text-center mt-2">Social Profiles</h6>
                        <div className="d-flex justify-content-around align-items-center">
                            <div className="social_icon shadow-lg">
                            <i className="fab fa-facebook-f"></i>
                            </div>
                            <div className="social_icon shadow-lg">
                            <i className="fab fa-instagram"></i>
                            </div>
                            <div className="social_icon shadow-lg">
                            <i className="fab fa-whatsapp"></i>
                            </div>
                            <div className="social_icon shadow-lg">
                            <i className="fab fa-twitter"></i>                           
                             </div>
                             <div className="social_icon shadow-lg">
                            <i className="fab fa-viber"></i>                           
                             </div>
                            <div className="social_icon shadow-lg">
                            <i className="fab fa-telegram-plane"></i>                            </div>
                            </div>
                          
                    </div>
                    <div className="row " style={{marginTop:"11px"}}>
                        <div className="col-lg-6 mb-3 mb-lg-0">
                        <div className="contact_background p-3 shadow-lg rounded-3">
                        <div className="social_icon_title mx-auto shadow-lg">
                        <i className="fas fa-envelope"></i>
                        </div> 
                        <h6 className="fw-bold text-center mt-2">Email Me</h6>
                        <h6 className="fw-bold mb-0 text-center" style={{fontSize:"12px"}}>lalbahadurbc2054@gmail.com</h6>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="contact_background p-3 shadow-lg rounded-3">
                        <div className="social_icon_title mx-auto shadow-lg">
                        <i className="fas fa-phone"></i>
                        </div> 
                        <h6 className="fw-bold text-center mt-2">Contact Me</h6>
                        <h6 className="fw-bold mb-0 text-center" style={{fontSize:"12px"}}>+9779865818795</h6>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 p-3">
                    <div className="p-3 shadow-lg rounded-3 bg-light">
                        <form action="" onSubmit={sendEmail}>
                            <div className="">
                                <input type="text" name="fullname" id="fullname" className="form-control shadow-lg fw-bold text-dark text-center" placeholder="Enter Your Name" />
                            </div>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" className="form-control shadow-lg fw-bold text-dark text-center" placeholder="Enter Your Email" />
                            </div>
                            <div className="mt-2">
                                <input type="text" name="subject" id="subject" className="form-control shadow-lg fw-bold text-dark text-center" placeholder="Enter Your Subject" />
                            </div>
                            <div className="mt-2">
                            <textarea className="form-control" name="message" id="message" className="form-control shadow-lg fw-bold text-dark text-center" placeholder="Enter Your Message" rows="3"></textarea>
                            </div>                            
                            <div className="text-center big_button">
                            <button className="btn btn-light shadow-lg mt-2 fw-bold ">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
