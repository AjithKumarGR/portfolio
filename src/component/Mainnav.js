import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Route, Routes } from 'react-router-dom';
import Prime from './Prime';
import Skills from './Skills';
import Education from './Education';
import About from './About';
import Portfolio from './Portfolio';
import Contactpage from './Contactpage';
import Personal from './Personal';

function Mainnav() {

    let mydesign=({isActive})=>{
             return isActive ? {
               "color":"lime",
               "text-decoration":"underline"
             }:
             {
               "color":"white",
               "text-decoration":"none", 
              
             }  
           }  


  return <> 
  <div className='container'>

    <Navbar collapseOnSelect expand="lg" >
     
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1">
             <NavLink style={mydesign} className =" p-3 fs-7 fw-bolder fs-5" to="/">Home</NavLink>
             <NavLink style={mydesign} className =" p-3 fs-7 fw-bolder fs-5"  to="abouts">About Us</NavLink> 
             <NavLink style={mydesign} className =" p-3 fs-7 fw-bolder fs-5"  to="portfolio">Portfolio</NavLink> 
             <NavLink style={mydesign} className =" p-3 fs-7 fw-bolder fs-5"  to="contant">Contact Me</NavLink>     
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </div>
  <Routes>
   <Route path='/'element={<Prime/>}></Route>
   <Route path='abouts' element={<About/>}>
     <Route path='skills' element={<Skills/>}></Route>
     <Route path='education' element={<Education/>}></Route>
     <Route path='personal' element={<Personal/>}></Route>
   </Route>
    <Route path='portfolio' element={<Portfolio/>}></Route>
    <Route path='contant' element={<Contactpage/>}></Route>
 </Routes>
  </>
}

export default Mainnav;