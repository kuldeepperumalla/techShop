import React from 'react'
import {Badge, Navbar, Nav, Container} from 'react-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
function Header() {

    const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
        <header>
            <Navbar bg='dark' variant='dark' expand="md" collapseOnSelect>
                <Container>
                    <LinkContainer to='/' >
                    <Navbar.Brand>Techshop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to={'/cart'}>
                            <Nav.Link><FaShoppingCart />Cart
                            {
                                cartItems.length > 0 && (
                                    <Badge
                                    pill
                                    bg='success'
                                    style={{marginLeft: '5px'}}
                                    >
                                        {cartItems.reduce((a,c) => a + c.qty, 0)}
                                    </Badge>
                                )
                            }
                            </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/login'}>
                            <Nav.Link><FaUser />Sign-in</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    </div>
  )
}

export default Header
