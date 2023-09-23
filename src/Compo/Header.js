import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux'
import { NavLink, Link, Route, Routes } from "react-router-dom";
import Footer from "./Footer";





const Headers = () => {
  const state = useSelector(state => state.handleCart)
  return <>
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="#home"><h2 className="text-primary"><span><i className="bi bi-yelp"></i>  Pizza Shop</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mr-0">
          <Nav>
            <NavLink className="nav-link ms-2 fw-bold mt-3" to="/"> <i class="bi bi-house-door"></i> Home</NavLink>
            <NavLink className="nav-link ms-4 fw-bold mt-3" to="/menu"><i class="bi bi-menu-button"></i> Menu</NavLink>
            <NavLink className="nav-link ms-4 fw-bold mt-3" to="/musttry"><i class="bi bi-emoji-heart-eyes"></i>  Must try</NavLink>
            <NavLink className="nav-link ms-4 fw-bold mt-3" to="/contact"><i class="bi bi-telephone"></i>  Contact Us</NavLink>
             {/* <NavLink to="/cart" className="btn btn-primary ms-4"><i class="bi bi-cart4"></i> Cart ({state.length}) </NavLink> */}
            <NavLink className="nav-link fw-bold ms-5 display-4  " to="/cart"><i class="bi bi-cart4 display-6"></i>
              <span class="position-absolute top-3 start-10 translate-middle badge rounded-pill bg-danger">
                {state.length}
                <span class="visually-hidden">Cart</span>
              </span>
            </NavLink>
            <NavLink className=" mt-3 btn btn-primary mb-3 mr-5 ms-5" to="/login"><i class="bi bi-box-arrow-in-right"></i>  Sign in</NavLink>

            {/* <Cart></Cart> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>

    </>
}
export default Headers;