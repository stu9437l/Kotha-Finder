import React, { useState ,useEffect} from 'react'

function PasswordShow() {
    const [Password,SetPassword]=useState("")
    const[btnName,setbtnName]=useState("show")
    const [hide,hidetoshow]=useState("password");
    const handlePassword=()=>{
      
       if(hide==="password" && btnName==="show" ){
        hidetoshow("text");
        setbtnName("Hide")
       }
       if(hide==="text" && btnName==="Hide"){
        hidetoshow("password");
        setbtnName("Show") 
       }
    }
   
   
    return (
        <div>
            <input type={hide} value={Password} onChange={(e)=>{
            SetPassword(e.target.value) }}/>
             <button onClick={handlePassword}>{btnName}</button>
        </div>
    )
}

export default PasswordShow
