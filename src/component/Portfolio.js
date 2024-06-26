import React from "react";
import project_img from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/project1.png';
import project1_img from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/project2.png';
import project2_img from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/project3.png';
import project3_img from 'C:/Users/Ajith/Desktop/Reactjs/newone/src/project4.png';

function Portfolio(){

return<>

        <div className="container">
                <div className="row">
                        <div className="col-lg-12">
                               <h3 className="text-center text-light pt-4 animate__animated animate__zoomIn" >My Proj<span style={{color:"lime"}}>ect</span></h3>
                        </div>
                        <div className="col-lg-6 conta pt-5 animate__animated animate__zoomIn ">
                                <div className="portfolio-box">
                                        <img src={project_img}></img>
                                <div className="portfolio-layer">
                                        <h4>Account Creating website</h4>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <p>Account creating  template  using<span style={{color:"blue"}} >#HTML #CSS</span></p>
                                </div>
                               </div>
                        </div>
                        <div className="col-lg-6 conta pt-5 animate__animated animate__zoomIn">
                                <div className="portfolio-box">
                                        <img src={project1_img}></img>
                                <div className="portfolio-layer">
                                        <h4>Price in Table website</h4>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <p>Price in Table is created by <span style={{color:"blue"}} >#HTML #CSS</span> and using in<span style={{color:"blue"}} >#REACT</span>  folder</p>
                                </div>
                               </div>
                        </div>
                        <div className="col-lg-6 conta pt-5 animate__animated animate__zoomIn">
                                <div className="portfolio-box">
                                        <img src={project2_img}></img>
                                <div className="portfolio-layer">
                                        <h4>Bus Travel website</h4>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <p><span style={{color:"blue"}} >#HTML #CSS</span>  using for create in travel website. </p>
                                </div>
                               </div>
                        </div>
                        <div className="col-lg-6 conta pt-5 animate__animated animate__zoomIn">
                                <div className="portfolio-box">
                                        <img src={project3_img}></img>
                                <div className="portfolio-layer">
                                        <h4>Online Examination website</h4>
                                        <br/>
                                        <br/>
                                        <p>Develop an online examination preparation 
                                        platform using <span style={{color:"blue"}} > #HTML #CSS</span> and <span style={{color:"blue"}} >#JavaScript </span>   
                                        featuring user authentication, exam 
                                        interface design, question bank         
                                        management, practice tests, and progress tracking.</p>
                                        
                                </div>
                               </div>
                        </div>
                
                </div> 
         </div>      

</>

}
export default Portfolio