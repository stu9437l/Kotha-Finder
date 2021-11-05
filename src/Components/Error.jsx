 import React from 'react'
import { useHistory } from 'react-router';

const Error = () => {
    let history=useHistory();
    const handleHome=()=>{
        history.push("/")
    }
    
    return (
      <>
      <div className="errorpage text-center">
          <h3 className="text-danger fw-bold text-center"><span className="border-end">404 </span> Page Not Found <span><i class="far fa-grin-tears"></i></span></h3>
          <button className="btn shadow-lg rounded-0 fw-bold eror_to_home_btn" onClick={handleHome}>Go Home</button>
      </div>
      </>
    )
}

export default Error;
