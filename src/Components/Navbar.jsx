import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import Banner from "./Banner";
const Navbar = () => {
  const [menu, setmenu] = useState("fas fa-bars");
  // const [light, setlight] = useState("light")
  const handleMenubtn=()=>{
    if(menu==="fas fa-bars"){
      setmenu("fas fa-times")
      // setlight("danger")
    }
    else{
      setmenu("fas fa-bars")
      // setlight("light")
    }
   
  }
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-lg">
  <div className="container">
    <NavLink className="navbar-brand" to="/">Company Logo</NavLink>
    <button className={`navbar-toggler shadow-lg bg-light`} type="button" data-bs-toggle="collapse" data-bs-target="#menu_icon" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleMenubtn}>
    <i className={`${menu}`}></i>    </button>
    <div className="collapse navbar-collapse" id="menu_icon">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName="active_class"  to="/">Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink exact activeClassName="active_class" to="/saved">Saved</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active_class" to="/faqs">FAQs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active_class" to="/register">Register</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink exact activeClassName="active_class" to="/login">Log In</NavLink>
        </li> 
      </ul>
     
    </div>
  </div>
</nav>
    </>
  );
};
export default Navbar;
