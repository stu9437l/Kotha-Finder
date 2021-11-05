import React  from 'react'
import Search from "./Search"

function Banner() {
    let date= new Date().getHours();
   let greeting=" ";
    if(date>=1 && date<12){
        greeting="Good Morning"
    }
    else if(date>=12 && date<16){
        greeting="Good Afternoon"
    }
    else if(date>=16 && date<19){
        greeting="Good Evening"
    }
    else{
        greeting="Good Night"
    }
    return (
       <>
       <div className="banner_img text-center text-white container-fluid" style={{padding:"2rem 0"}}>
           <div className="">
           <h3 className="fw-bolder shadow-lg" style={{marginTop:"6rem"}}>{greeting}</h3>
           <h2 className="fw-bolder shadow-lg">Welcome to Room Finder</h2>
           
           </div>
       </div>
       </>
    )
}

export default Banner;
