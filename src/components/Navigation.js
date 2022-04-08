import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';

import Container from 'react-bootstrap/Container'
import {useState} from 'react'
import './../styles/nav.css';


const Navigation = () => {

    return (
      
        <Navbar bg="light" expand="lg">
        <Container>
        
            <Nav id="NavBarNew" className="me-auto" style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#My story">My story</Nav.Link>
              <NavDropdown title="Professional" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Personal" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="Resume">Resume</Nav.Link>

            </Nav>
        </Container>
      </Navbar>
            )
        
        }
        
        export default Navigation;
        