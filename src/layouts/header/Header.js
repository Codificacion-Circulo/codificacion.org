import React from 'react'
import logo from "../../assets/Logo.ico";
import {Navbar,Container,Nav} from 'react-bootstrap';

function Header(props) {
    return (
        <Navbar sticky="top" style={{backgroundColor:" #e3f2fd"}} expand="lg">
        <Container>
        <Navbar.Brand href="/home">
        <img
          alt=""
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-center"
        />{' '}
      Codificacion
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-center align-items-center text-center"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-center">
              <Nav.Link className="mx-auto" href="/">Home</Nav.Link>
              <Nav.Link className="mx-auto" href="/community">Community</Nav.Link>
              <Nav.Link className="mx-auto" href="/domain">Domain</Nav.Link>
              <Nav.Link className="mx-auto" href="/team">Team</Nav.Link>
              <Nav.Link className="mx-auto" href="/contact">Contact Us</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}



export default Header

