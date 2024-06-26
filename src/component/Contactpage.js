import { Component } from "react";
import emailjs from 'emailjs-com';

import location from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/location.png';
import whatapp from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/whatapp.png';
import email from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/mail.png';
import facebook from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/facebook.png';
import insta from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/insta.png';
import snapchat from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/component/snapchat.png';




class  Contactpage extends Component{
      constructor(){
            super()
            this.state={
                  "Name":"",
                  "Email":"",
                  "Num":"",
                  "text":"",
            }
      }
      getdata = (event) => {
            this.setState({
                  [event.target.name]: event.target.value
            })
      }
      clearState = () =>{
            this.setState({
                  "Name":"",
                  "Email":"",
                  "Num":"",
                  "text":"",
            })
      }
      
   sendmail = (e) => {
      if(this.state.Name == "" && this.state.Email == "" && this.state.Num == "" && this.state.text == ""){
            alert("Please fill all the Fields")
            return false
      }

      e.preventDefault();

      emailjs.sendForm('service_64nf09q','template_a6muv5z', e.target, 'BLjas39QCVpVHwSCI')
      .then(res => {
            console.log('Email sent successfully',res);
            this.clearState()
      })
      .catch((err) => {
            console.log('Error sending Email',err)
      })

      console.log("Message send successfully")

      alert("Email send successfully")

   }

render(){
     
             
return<>
                <div className="container">
                        <div className="row">
                            <div className="col-lg-12">   
                                  <h3 className="text-center text-light animate__animated animate__zoomIn"  style={{ "paddingTop":"2rem","paddingBottom":"2%"}}>Contact< span style={{color:"lime"}}> Me</span></h3>
                                         
                            </div>  
                                       
                                      <div className="col-lg-8 col-sm-12 col-md-12 col-12 pt-1" >
                                          <form className=" contact_form animate__animated animate__zoomIn" onSubmit={this.sendmail}>
                                                <div className="contact_me" >
                                                <label>Full Name</label>
                                                <input type="text" name="Name" className="contact_name" placeholder="FullName" onChange={this.getdata} value={this.state.Name} required />     
                                                </div>
                                                <div className="contact_me">
                                                <label >Email</label>
                                                <input type="email" name="Email" placeholder="name@website.com" onChange={this.getdata} value={this.state.Email} required />      
                                                </div>
                                                <div className="contact_me">
                                                <label>Phone Number</label>
                                                <input type="number" name="Num" placeholder="Phone Number" onChange={this.getdata} value={this.state.Num}  required/>
                                                </div>
                                                <div className="contact_me">
                                                <label>Message</label>
                                                <textarea name="text" placeholder="Message" onChange={this.getdata} value={this.state.text}  required/>
                                                </div>
                                                <div>
                                                      <button className="contact_btu" type="submit">Submit</button> 
                                                </div>
                                               
                  
                                          </form>
                                      </div>
                                      <div className="col-lg-4 pt-3 cont_all animate__animated animate__zoomIn " >
                                           
                                                         <p><iframe className="map_frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4551888298997!2d78.1222471743106!3d9.895993990204177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c568c5a1f8a1%3A0x1900d5561034b8d1!2sThamarai%20Street%2C%20Villapuram%2C%20Madurai%2C%20Tamil%20Nadu%20625012!5e0!3m2!1sen!2sin!4v1716534653341!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                                                     <div className="com_class" >
                                                      <img  style={{marginLeft:"8%"}} src={location} width="5%"/>
                                                      <p  className="cont_num" style={{marginTop:"-7%"}}>Plot.No 9 Thamarai Street villapuram<span style={{color:"lime"}}> Madurai - 625012</span> </p>
                                                      </div>
                                                      <div  className="com_class">
                                                      <img  style={{marginLeft:"8%",marginTop:"8%"}} src={email} width="5%"/>
                                                      <p className="cont_num"style={{marginTop:"-6%"}}>ajithkumar08@gmail<span style={{color:"lime"}}>.com</span></p>
                                                      </div>
                                                     <div  className="com_class">
                                                     <img  style={{marginLeft:"8%",marginTop:"7%"}} src={whatapp} width="5%"/>
                                                     <p className="cont_num "style={{marginTop:"-6%"}}>+91 75503<span style={{color:"lime"}}>59635</span></p>
                                                     </div>
                                                     
                                                      <div className="icon_media">
                                                            <a style={{marginLeft:"8%"}} href="https://www.facebook.com/share/FBvh3qYDYsw6mAX1/?mibextid=qi2Omg" target="_blank"><i className="fab fa-facebook"></i></a>
                                                            <a href="https://www.instagram.com/ad_love_143_?utm_source=qr&igsh=am80ejN4bzg0cDBr" target="_blank"><i className="fab fa-square-instagram"></i></a> 
                                                            <a href="https://github.com/AjithKumarGR" target="_blank"> <i className="fab fa-github"></i></a>
                                                            <a href="https://www.linkedin.com/in/ajith-kumar-76b0972aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank"> <i className="fab  fa-linkedin"></i></a>
              </div>

                                          </div>
                                        
                        
                         
                  </div>

         </div>
        

</>
}
}
export default Contactpage
    
    
