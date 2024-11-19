import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../assets/css/Navigation.css"


export default function Navigation() {
  return (
    <>

    
    <section className='navigation_section'>
    <div className="navigation_part">
    <Navbar expand="lg" className='navigate_bar'>
      <Container>
        <Navbar.Brand><Nav.Link as={NavLink} to="/"><img src="src/assets/img/home-img/website-Logo.svg" alt="" className="header_icon_img" /></Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='order-lg-3 order-2' />
        <Navbar.Collapse id="basic-navbar-nav" className='order-3 order-lg-1'>
          <Nav className="m-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/customers">customers</Nav.Link>
            <Nav.Link as={NavLink}  to="/WhoAreWe">WhoAreWe</Nav.Link>
            <Nav.Link as={NavLink}  to="/try yourself">try yourself</Nav.Link>
            <Nav.Link as={NavLink} to="/news">News</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="navbar-icons order-lg-2 order-1 m-auto">
                  <div className="card_part">
                    <div className="card_part_btn">
                     <a href="#"><button>Try it Now <img src="src/assets/img/home-img/white-cross-arrow.svg" alt="" /></button></a>
                   </div>
                  </div>
              </div>
      </Container>
    </Navbar>
    </div>
    </section>


     
    
    </>
  )
}

