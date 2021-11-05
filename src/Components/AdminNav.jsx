import React,{useState} from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [Adnav_menu, setAdnav_menu] = useState("fas fa-bars");
  // const [light, setlight] = useState("light")
  const handleMenubtn=()=>{
    if(Adnav_menu==="fas fa-bars"){
      setAdnav_menu("fas fa-times")
      // setlight("danger")
    }
    else{
      setAdnav_menu("fas fa-bars")
      // setlight("light")
    }
   
  }
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-lg">
  <div className="container">
    <NavLink className="navbar-brand" to="/">Company Logo</NavLink>
    <button className={`navbar-toggler shadow-lg bg-light`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleMenubtn}>
    <i className={`${Adnav_menu}`}></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-start align-items-lg-center">
        <li className="nav-item">
          <NavLink exact activeClassName="active_class"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active_class" to="/saved">Saved</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active_class" to="/faqs">FAQs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active_class" to="/register">Register</NavLink>
        </li> 
        <li className="nav-item ">
          <NavLink exact activeClassName="active_class" to="/login">Log In</NavLink>
        </li> 
        <li className="nav-item mx-auto shadow_res_for_setting p-2 p-lg-0">
            <div className="d-flex align-items-center flex-column ">
            <div className="user_profile shadow-lg mx-auto mb-2 mb-lg-0">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMAYU7X8sZP6O-LgRRzjU71TtTuJE1rkFXA&usqp=CAU" alt="" className="img-fluid" />
            </div>
          <NavLink exact activeClassName="active_class margin_res" to="/setting">Setting</NavLink>
            </div>
        </li> 
      </ul>
     
    </div>
  </div>
</nav>
    </>
  );
};
export default Navbar;
