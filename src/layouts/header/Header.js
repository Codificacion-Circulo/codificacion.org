import React from 'react'
import './Header.css'
import logo from "../../assets/header/Logo.ico";
import {Navbar,Container,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <Navbar sticky="top" style={{backgroundColor:" #e3f2fd"}} expand="lg">
        <Container>
        <Navbar.Brand href="/home">
            <Link to={"/"} style={{textDecoration: "none"}} className={"text-dark"}>
        <img
          alt=""
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-center"
        />{' '}
      Codificación
            </Link>
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-center align-items-center text-center"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-center">
              <Nav.Link className="hover-underline-animation mx-3 text-center text-dark" href="/">Home</Nav.Link>
              {/* <Nav.Link className="hover-underline-animation mx-3 text-center text-dark" href="/community">Community</Nav.Link> */}
              <Nav.Link className="hover-underline-animation mx-3 text-center text-dark" href="/domain">Domain</Nav.Link>
              <Nav.Link className="hover-underline-animation mx-3 text-center text-dark" href="/team">Team</Nav.Link>
              <Nav.Link className="hover-underline-animation mx-3 text-center text-dark" href="/contact">Contact Us</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}



export default Header

