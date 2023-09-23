import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from "./Cart";
import { useSelector } from 'react-redux'
import { NavLink,Link, Route, Routes } from "react-router-dom";
import CartShow from "./CartShow";




const AppBar = () => {
  const state = useSelector(state => state.handleCart)
  return (

    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="#home"><h2 className="text-primary"><span><i className="bi bi-yelp"></i>  Pizza Shop</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav  >
            <Nav.Link href="#home" className="fw-bold ms-3"><i class="bi bi-house"></i> Home</Nav.Link>
            <Nav.Link href="#menu" className="fw-bold ms-3"><i class="bi bi-menu-down"></i> Menu</Nav.Link>
            <Nav.Link href="#musttry" className="fw-bold ms-3"><i class="bi bi-emoji-heart-eyes"></i>  Must try</Nav.Link>
            <Nav.Link href="#contactus" className="fw-bold ms-3"><i class="bi bi-telephone"></i>  Contact Us</Nav.Link>
             
            <NavLink to="/cart" className="btn btn-primary ms-4"><i class="bi bi-cart4"></i>Cart ({state.length}) </NavLink> 
{/* <NavLink className="nav-link fw-bold ms-4 " to="/cart"><i class="bi bi-cart4"></i>
              <span class="position-absolute top-3 start-10 translate-middle badge rounded-pill bg-danger">
                {state.length}
                <span class="visually-hidden">Cart</span>
              </span>
            </NavLink> */}
            {/* <Cart></Cart> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
export default AppBar;