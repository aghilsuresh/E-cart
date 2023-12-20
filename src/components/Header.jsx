import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {

//to access state useselectore hook is used
  const wishlist=useSelector((state)=>state.wishlistReducer)//here the state represent store

  const cart=useSelector((state)=>state.cartReducer)

  return (
    <div>
         <Navbar expand="lg" className="bg-dark mb-4 position-fixed w-100 top-0" style={{zIndex:"1"}}>
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:"none"}} ><i class="fa-solid fa-cart-shopping"></i>    MY-CART</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-3 mt-2' ><Link  style={{textDecoration:"none" }} to={'/wishlist'} >Wishlist <Badge bg="warning">{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link className='btn border rounded me-3 mt-2' ><Link  style={{textDecoration:"none"}} to={'/cart'} >Cart <Badge bg="warning">{cart.length}</Badge></Link ></Nav.Link>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header