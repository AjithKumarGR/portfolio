import React, { useEffect } from "react";
import AOS from'aos';
import 'aos/dist/aos.css';
import{Typewriter,Cursor} from 'react-simple-typewriter';
import manimage from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/manimage.png';


// import bg from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/manimage.png'
// import btnImg from '../../assets/hireme.png'; 

function Home(){
       
        // useEffect(()=>{
        //         AOS.init({duration:"1000"})
        //     },[])
            
       
return<>
         <div className='container'>
                 <div className="row">
                <       section id="intro">
                        <div className="introContent">
                                <span className="hello fw-bold">
                                        <Typewriter 
                                                words={['Welcome Everyone This is my Portfolio,','Hello,']}
                                                loop
                                                typeSpeed={70}
                                                deleteSpeed={50} 
                                                delaySpeed={1000}
                                                />    &#128075;&#127995;  
                                                <span style={{color:"lime"}}><Cursor cursorStyle="<<<"/></span> </span>
                                <span className="introText" >I'm <span className="introName">AjithKumar</span><br/>React js Developer</span>
                                <p className="introPara">I am a skilled web desiger with  experience in creating visually appealing<br/> and user friendly websites.</p>
                               
                        </div >
                        <button className="btn cv"  type='button'  >View CV</button>
                         </section>
                         {/* <div className="col-lg-12">
                                <img src={manimage} width="20%"/>
                         </div> */}

                </div>
         

         </div>
      
        
        

</>

}
export default Home