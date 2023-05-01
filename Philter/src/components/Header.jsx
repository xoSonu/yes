import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Outlet} from 'react-router-dom';
import logo from './images/logo.png';

function Header() 
{

    return (
      <div className="Header">
        <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
          <Container>
            <Link style={{textDecoration: 'none'}} to='/manufec'><Navbar.Brand  style={{fontSize: 25, fontWeight: 'bold', textTransform: 'uppercase'}} href=''>
              <img alt='logo' src={logo} width={30} height={'auto'} className='mx-2'  />
              Philter</Navbar.Brand></Link>
            <Navbar.Toggle />
            <Navbar.Collapse  className="justify-content-end" id='basic-navbar-nav'>
              <Nav style={{fontSize: 17, textTransform: 'uppercase'}}>
                <Nav.Link href=''><Link className='active' style={{textDecoration: 'none', color: '#D0D8DA'}} to='/manufec'>Manufacturer</Link></Nav.Link>
                <Nav.Link href=''><Link style={{textDecoration: 'none', color: '#D0D8DA'}} to='/distributor'>Distributor</Link></Nav.Link>
                <Nav.Link href=''><Link style={{textDecoration: 'none', color: '#D0D8DA'}} to='/analytics'>Analytics</Link></Nav.Link>
                <Nav.Link href=''><Link style={{textDecoration: 'none', color: '#D0D8DA'}} to='/product'>Product</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>

        <Outlet  />

        
      </div>
    );
  }
  
  export default Header;