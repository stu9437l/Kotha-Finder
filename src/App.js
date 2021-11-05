import React from "react";
import './App.css';
import { Switch,Route} from "react-router-dom"
import Home from "./Components/Home";
import Saved from "./Components/Saved";
import Contact from "./Components/Contact";
import Faqs from "./Components/Faqs";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import LoginForm from "./Components/LoginForm";
import AdminNav from "./Components/AdminNav"
import Setting from "./Components/Setting";
import ScrollTop from "./Components/ScrollTop";
function App() {
  return (
  <>
  <AdminNav />
  <ScrollTop />
   <Switch>
     <Route exact path="/" component={Home}></Route>
     <Route exact path="/saved" component={Saved}></Route>
     <Route exact path="/contact" component={Contact}></Route>
     <Route exact path="/faqs" component={Faqs}></Route>
     <Route exact path="/register" component={Register}></Route>
     <Route exact path="/login" component={LoginForm}></Route>
     <Route exact path="/setting" component={Setting}></Route>
     <Route component={Error} ></Route>
  </Switch>

  </>
  );
}

export default App;
