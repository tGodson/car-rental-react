import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo_white.png';

export default function Navigation() {
  const token = useSelector(state => state.user.token);
  const username = useSelector(state => state.user.username);

  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Brand href="/"><img className="logo" src={logo} alt="Car Rentals" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          {
            token === undefined || token === 'undefined' || token === ' '
              ? (
                <>
                  <Link className="nav-link white" to="/login">SIGN IN</Link>
                  <Link className="nav-link" to="/register">
                    <span className="btn-menu">SIGN UP</span>
                  </Link>
                </>
              )
              : (
                <>
                  <Link className="nav-link white" to="/cars">Cars</Link>
                  <Link className="nav-link white" to="/favourites">Favourite Cars</Link>
                  <Link className="nav-link white" to="/logout">
                    LOGOUT
                    {' '}
                    {username}
                  </Link>
                </>
              )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
