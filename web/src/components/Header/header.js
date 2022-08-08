import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
const Header = ()=>{
const navigate = useNavigate();
    return(
    <div>
        <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home" onClick={()=>{navigate('/');}}>Home</Navbar.Brand>
        </Container>
      </Navbar>
     </div>
    )
}
export default Header