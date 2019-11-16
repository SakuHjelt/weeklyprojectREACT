import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Navigation.css'


export default class Navigation extends Component {
  render () {
    return (
      <div>
<div class="neon">
    <span class="text" data-text="Diary">DiaryOtsikko</span>
    <span class="gradient"></span>
    <span class="spotlight"></span>
  </div>
     <div className="linkitDiv">
       
       <Link to="/"><button class="glow-on-hover" type="button">Home </button></Link>	&nbsp;
       <Link to="/entries"><button class="glow-on-hover" type="button"> Entries </button></Link>	&nbsp;
       <Link to="/form"><button class="glow-on-hover" type="button">Add!</button></Link> 
     </div> 
     </div>

    )
  }
}


// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import NavbarBrand from 'react-bootstrap/NavbarBrand'

// export default class Navigation extends Component {
//   render () {
//     return (
//       <Navbar fixed='top' expand="sm" collapseOnSelect bg='dark' variant='blue'>
//           <NavbarBrand>
//             Lé Diary-Magnífico
//           </NavbarBrand>
//           <Navbar.Toggle aria-controls='entry-navbar-nav' />
//           <Navbar.Collapse id='entry-navbar-nav'>
//               <Nav className="mr-auto">
//             <Nav.Item>
//               <Nav.Link eventKey={1} as={Link} to='/'>
//                 Info
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey={2} as={Link} to='/entries'>
//                 Diary
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey={3} as={Link} to='/form'>
//                 Entry Adding
//               </Nav.Link>
//             </Nav.Item>
//             </Nav>
//           </Navbar.Collapse>
//       </Navbar>
//     )
//   }
// }
