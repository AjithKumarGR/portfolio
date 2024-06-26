import React, { Component, useEffect } from "react";
import bg from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/Img_Bg.png';
import c_img from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/c_logo.png';
import html_img from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/html_logo.png';
import css_img from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/css_logo.png';
import js_img from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/js_logo.png';
import reactjs_img from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/Reactjs_logo.png';
import bootstrap_img from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/bootstap_logo.png';
import github_img from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/github_logo.png';
import AOS from'aos';
import 'aos/dist/aos.css';
import Countup from 'react-countup'
import { NavLink, Outlet } from "react-router-dom";


class Aboutus extends Component {
   

            // useEffect(()=>{
            //     AOS.init({duration:"1000"})
            // },[])

   
render(){
   
    let esign=({isActive})=>{
        return isActive ? {
          "color":"lime",
          "text-decoration":"underline",
           "margin-left":"28%",
           "font-size":"23px",
           "font-weight":"bold"
          
          
        }:
        {
          "color":"white",
          "text-decoration":"underline", 
           "margin-left":"28%",
           "font-size":"23px",
           "font-weight":"bold"
        }  
      }  




return<>
    
{/* <div className='container'>
    <div className='row'>
        <div className="col-lg-12">
            <h3 className="text-center text-light" style={{ "paddingTop":"3rem","paddingBottom":"2%"}} data-aos="zoom-out">Personal<span style={{"color":"lime"}}>&nbsp;&nbsp;Info</span> </h3>
        </div>
      
         
        <div className='col-lg-4 pt-4  text-light Aboutcss' > 
        <div className="Aboutrow  h5">
        <div className="Aboutcol1 " >First Name&#160;&#160;&#160;&#160;</div>
                    <div className="Aboutcol fw-lighter">Ajithkumar</div>   
        </div>
        <div className="Aboutrow h5">
        <div className="Aboutcol1 pt-4 "  >Age&#160;&#160;&#160;&#160;</div>
                    <div className="Aboutcol fw-lighter">22Year</div>   
        </div>
        <div className="Aboutrow h5">
        <div className="Aboutcol1 pt-4 " >Addrees&#160;&#160;&#160;&#160;</div>
                    <div className="Aboutcol fw-lighter" >Madurai</div>   
        </div>
        <div className="Aboutrow h5">
        <div className="Aboutcol1 pt-4 " >Nationality&#160;&#160;&#160;&#160;</div>
                    <div className="Aboutcol fw-lighter" >Indian</div>   
        </div>              
         </div> 
         <div className="col-lg-4 text-light pt-4 aboutcss1">
         <div className="Aboutrow h5">
        <div className="Aboutcol1 " >Last Name&#160;&#160;&#160;&#160;</div>
                    <div className="Aboutcol fw-lighter"  >Rameshbabu</div>   
        </div>
        <div className="Aboutrow h5">
        <div className="Aboutcol1 pt-4 " >Phone No&#160;&#160;&#160;&#160;</div>
                    <div className="Aboutcol fw-lighter"  >7550359635</div>   
        </div>
        <div className="Aboutrow h5">
        <div className="Aboutcol1 pt-4 "  >Email&#160;&#160;&#160;&#160;</div>
                    <div className="Aboutcol fw-lighter"  >ajithkumargr08@gamil.com</div>   
        </div>
        <div className="Aboutrow h5">
        <div className="Aboutcol1 pt-4 "  >Language&#160;&#160;&#160;&#160;</div>
                    <div className="Aboutcol fw-lighter"  >Sourashtra,Tamil,English</div>   
        </div>      
         </div> 
   </div>  
  

</div>    */}

    {/* <NavLink  style={design} to="skills">Skills</NavLink> */}
    {/* <NavLink   style={design} to="education">Education</NavLink>
    <Outlet/> */}


{/* <div className="container">
    <div className="row">
    <div className="Aboutrow1 pt-5 col-lg-12">
            <h3 className=" text-center text-light " data-aos="fade-up-right">Ski<span style={{"color":"yellow"}}>lls</span></h3>
        </div>
            <div className="col-lg-3 col-sm-6 col-xs-6 pt-5">
            <h4  className="text-light"  data-aos="zoom-out"><span style={{"color":"yellow","marginLeft":"30%"}}>C</span> progarmming</h4>
            <img  className="image_shadow pt-3"style={{"marginLeft":"30% "}} src={c_img} width="55%" data-aos="zoom-in"></img>
            </div>
           
            <div  className="col-lg-3 col-sm-6 col-xs-6 pt-5 ">
            <h4   className="text-light "  data-aos="zoom-in"><span style={{"color":"yellow","marginLeft":"45%"}}>HT</span>ML</h4>
            <img  className="image_shadow pt-4"style={{"marginLeft":"25% "}} src={html_img} width="55%"  data-aos="zoom-out"></img>
            </div>
            <div  className="col-lg-3 col-sm-6 col-xs-6 pt-5 ">
            <h4   className="text-light "  data-aos="zoom-out"><span style={{"color":"yellow","marginLeft":"45%"}}>CS</span>S</h4>
            <img  className="image_shadow pt-4"style={{"marginLeft":"25% "}} src={css_img} width="55%" data-aos="zoom-in"></img>
            </div>
           <div  className="col-lg-3 col-ms-6 col-xs-6 pt-5 ">
           <h4  className="text-light"  data-aos="zoom-in"><span style={{"color":"yellow","marginLeft":"25% "}} >Java</span>Script</h4>
           <img  className=" image_shadow pt-1"style={{"marginLeft":"25% "}} src={js_img} width="45%"  data-aos="zoom-out"></img>
           </div>
           <div  className="col-lg-3  col-ms-6 col-xs-6  pt-5 " >
           <h4  className="text-light"  data-aos="zoom-out"><span style={{"color":"yellow","marginLeft":"30%"}}>React</span> JS</h4>
           <img  className=" image_shadow pt-2"style={{"marginLeft":"25% "}} src={reactjs_img} width="55%" data-aos="zoom-in"></img>
           </div>
           <div  className="col-lg-3  col-ms-6 col-xs-6  pt-5 " >
           <h4  className="text-light" data-aos="zoom-in"><span style={{"color":"yellow","marginLeft":"30%"}}  >Boot</span> strap</h4>
           <img  className=" image_shadow pt-2"style={{"marginLeft":"25% "}} src={bootstrap_img} width="55%"  data-aos="zoom-out"></img>
           </div>
             <div  className="col-lg-3  col-ms-6 col-xs-6  pt-5 " >
           <h4  className="text-light"  data-aos="zoom-out"><span style={{"color":"yellow","marginLeft":"30%"}}>Git</span>hub</h4>
           <img  className=" image_shadow pt-2"style={{"marginLeft":"25% "}} src={github_img} width="55%" data-aos="zoom-in"></img>
           </div>
        </div>  
</div> */}


{/* <section className="skills" id="skills">
    <h2 className="heading">Skills</h2>
    <div className="container">
        <div className="row" id="skillsContainer">
            <div className="bar">
                <div className="info"> 
                        <img  src={c_img} width="55%" ></img>
                        <span>C progarmming</span>
                </div>
            </div>

        </div>
    </div>
</section> */}
      
{/* <div className="container">
<div className="col-lg-12 pt-5">
        <h2 className="heading text-center text-light " >Ski<span style={{"color":"yellow"}}>lls</span></h2>
        </div>
    <div className="row skills text-center pt-5 ">
        <div className="col-lg-4 pt-5">
        <img  src={c_img} width="30%" ></img>
        <div>
        <span>C progarmming</span>
        </div>
        </div>
        <div className="col-lg-4 pt-5">
        <img  src={c_img} width="30%" ></img>
        <div>
        <span>C progarmming</span>
        </div>
        </div>
        <div className="col-lg-4  pt-5">
        <img  src={c_img} width="30%" ></img>
        <div>
        <span>C progarmming</span>
        </div>
        </div>
        <div className="col-lg-4 pt-5">
        <img  src={c_img} width="30%" ></img>
        <div>
        <span>C progarmming</span>
        </div>
        </div>
        <div className="col-lg-4 pt-5">
        <img  src={c_img} width="30%" ></img>
        <div>
        <span>C progarmming</span>
        </div>
       
        </div>
        <div className="col-lg-4 pt-5">
        <img  src={c_img} width="30%" ></img>
        <div>
        <span>C progarmming</span>
        </div>
        </div>
    </div>

</div> */}



</>
}
}
export default Aboutus