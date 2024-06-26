// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { NavLink, Route, Routes } from 'react-router-dom';
// import Aboutus from './Aboutus';
// import Contacts from './Contacts';
// import Home from './Home';
// import Resume from './Resume';
// import Skills from './Skills'
// import Education from './Education'


// function Headernav  () {
    
//   let design=({isActive})=>{
//     return isActive ? {
//       "color":"lime",
//       "text-decoration":"underline"
//     }:
//     {
//       "color":"white",
//       "text-decoration":"none", 
      
//     }  
//   }  
  
     
//   return <>
//   <div className='container'>
   
//           <Navbar collapseOnSelect expand="lg">
     
//         <Navbar.Brand  href="#">Portfolio</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto justify-content-end flex-grow-1">
//           <NavLink style={design} className ="nav p-3 fs-7 fw-bolder fs-5" to="/">Home</NavLink>
//           <NavLink style={design} className ="nav p-3 fs-7 fw-bolder fs-5"  to="abouts">About Us</NavLink> 
//           <NavLink style={design} className ="nav p-3 fs-7 fw-bolder fs-5"  to="portfolio">Portfolio</NavLink> 
//           <NavLink style={design} className ="nav p-3 fs-7 fw-bolder fs-5"  to="contant">Content Me</NavLink>     
//           </Nav>
//           <Nav>
//           </Nav>
//         </Navbar.Collapse>
//     </Navbar>
   
//     </div>
   
//     <Routes>
//   <Route path='/'element={<Home/>}></Route>
//   <Route path='abouts' element={<Aboutus/>}>
//     <Route path='skills' element={<Skills/>}></Route>
//     <Route path='education' element={<Education/>}></Route>
//   </Route>
//   <Route path='portfolio' element={<Resume/>}></Route>
//   <Route path='contant' element={<Contacts/>}></Route>
// </Routes>
   
  
// </>

// }


// export default Headernav