import React,{ useRef } from "react";
// import bg from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/Img_Bg.png';
import {  NavLink, Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
// import facebook_icon from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/facebook_icon.png';
import myphoto1 from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/myphoto1.png';
import { Link,animateScroll as scroll } from "react-scroll";


function About(){

    let design=({isActive})=>{
        return isActive ? {
          "color":"lime",
          "text-decoration":"underline",
          // "padding-right":"5%",
           "font-size":"23px",
           "font-weight":"bold"
          
          
        }:
        {
          "color":"white",
          "text-decoration":"underline", 
          // "padding-right":"5%",
           "font-size":"23px",
           "font-weight":"bold"
        }  
      }  
      const skills = useRef();
      const education = useRef();
      const personal = useRef();

      const scrollHandler = (elmRef) => {
              console.log(elmRef);
              window.scrollTo({top: elmRef.current.offsetTop, behavior: "smooth"})
              }
      

    return<>
    <div className='container'>
    <div className='row'>
        <div className="col-lg-12">
            <h3 className="text-center text-light animate__animated animate__zoomIn" style={{ "paddingBottom":"2%"}} >About<span style={{"color":"lime"}}>&nbsp;&nbsp;US</span> </h3>
        </div>
        <div className="col-lg-6 animate__animated animate__zoomIn " >
            <img className="myphoto1" src={myphoto1} width="85%"></img>  
         </div>
         <div className="col-lg-6 pt-4 animate__animated animate__zoomIn ">
              <h1 className="about_hi pt-2">Hi there<span style={{"color":"lime"}}>,</span></h1>
               <h1 className="about_name pt-2">I'm AjithKumar</h1>
               <h1 className="about_sub pt-2">Front-End-Developer</h1>
            <p className="about_para pt-2">I'm a Ajithkumar in Madurai.I like working on the Front-end of the web. <br/>This is my site, Coder's Block, where I blog and share 
              whatever site<br/> projects I've been working on. </p>
              <div className="icon_media">
              <a href="https://www.facebook.com/share/FBvh3qYDYsw6mAX1/?mibextid=qi2Omg" target="_blank"><i className="fab fa-facebook"></i></a>
             <a href="https://www.instagram.com/ad_love_143_?utm_source=qr&igsh=am80ejN4bzg0cDBr" target="_blank"><i className="fab fa-square-instagram"></i></a> 
             <a href="https://github.com/AjithKumarGR" target="_blank"> <i className="fab fa-github"></i></a>
             <a href="https://www.linkedin.com/in/ajith-kumar-76b0972aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank"> <i className="fab  fa-linkedin"></i></a>
              </div>
             
         </div>
          <Nav className="justify-content-end flex-grow-1 pb-5">
            
         <NavLink ref={skills} className="p-1" style={design}to="skills" onClick={() => scrollHandler(skills)}>Skills</NavLink> 
         {/* <Link to="skills" className="p-1" activeClass="active" spy={true} smooth={true} duration={500}>Skills</Link> */}
         <NavLink ref={education} className="p-1"  style={design} to="education"  onClick={() => scrollHandler(education)}>Education</NavLink>
         <NavLink ref={personal} className="p-1"  style={design} to="personal"  onClick={() => scrollHandler(personal)}>Personal Info</NavLink>
         <Outlet/>
    </Nav>
     </div>

    </div>
   
    
    
    </>
}
export default About