import React,{useState} from 'react';

function ScrollTop() {
    const [showScroll, setShowScroll] = useState(false)
         const checkScrollTop = () => {    
         if (!showScroll && window.pageYOffset > 100){
               setShowScroll(true)    
           } else if (showScroll && window.pageYOffset <= 100){
             setShowScroll(false)    
             }  
          };
    window.addEventListener('scroll', checkScrollTop);
    const hadleScroll=()=>{
        window.scrollTo({top:0,behavior:"smooth"});
    }
    return (
       <div className="scroll_icon_parent fixed-bottom shadow-lg  mx-auto" onClick={hadleScroll}
       style={{display: showScroll ? 'flex' : 'none'}}>
           <i class="fas fa-angle-double-up"></i>
       </div>
    )
}

export default ScrollTop;
