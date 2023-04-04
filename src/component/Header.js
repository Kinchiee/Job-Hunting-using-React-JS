import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css'
import { Navbar, Nav } from 'react-bootstrap';



function Header() {
  return (
    <Navbar bg="pink" expand="lg" className='head-nav' sticky='top'>
    <Navbar.Brand href="/"style={{ fontSize: "50px", color: "white", paddingLeft: "10px" }}>LAV.JOB</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarSupportedContent" />
    <Navbar.Collapse id="navbarSupportedContent">
      <Nav className="me-auto">
        <Nav.Link href="/" active>HOME</Nav.Link>
        <Nav.Link href="/dashboard" active>JOBS</Nav.Link>
        <Nav.Link href="/about-us" active>ABOUT US</Nav.Link>
        <Nav.Link href="/contact-us" active>CONTACT US</Nav.Link>
        <Nav.Link href="/resume" active>RESUME</Nav.Link>
        <Nav.Link href="/logout" active >LOGOUT</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header
