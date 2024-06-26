import React from "react"
import{Typewriter,Cursor} from 'react-simple-typewriter'; 
import myphoto from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/myphoto1.png';
import Resume from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/G.R.AjithKumar Resume.pdf';


function Prime(){
       
    // useEffect(()=>{
    //         AOS.init({duration:"1000"})
    //     },[])
        
   
return<>
     <div className='container'>
             <div className="row">
            {/* <       section id="intro"> */}
                    <div className="introContent col-lg-6">
                            <span className="hello fw-bold animate__animated animate__zoomIn"> Hello,&#128075;&#127995; </span>
                            <span className="introText animate__animated animate__zoomIn" >I'm <span className="introName">AjithKumar</span><br/>
                             <span>
                                    <Typewriter 
                                            words={['React js Developer,','Front-End-Developer,','Web Developer']}
                                            loop
                                            typeSpeed={70}
                                            deleteSpeed={50} 
                                            delaySpeed={1000}
                                            />   
                                            <span style={{color:"lime"}}><Cursor cursorStyle="<<<"/></span> </span></span>
                            <p className="introPara animate__animated animate__zoomIn">I am a skilled web desiger with  experience in creating visually appealing<br/> and user friendly websites.</p>
                            
                           <a href={Resume} style={{textDecoration:"none"}} target="_blank"><button className="btn cv animate__animated animate__zoomIn"  type='button'  >View CV</button></a>
                    </div >
                    <div className="col-lg-6 animate__animated animate__zoomIn">
                                <img className=" photo_img " src={myphoto} width="85%"></img>
                     </div>
                     {/* </section> */}
                    
                   

            </div>
     

     </div>
  
    
    

</>

}
export default Prime