import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './css/Navegacion.css'

export default function Navegacion() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Principal</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="link mr-3" to="/">Inicio</Link>
        <Link className="link mr-3" to="/PanelPrincipal">Dashboard2</Link>
        <Link className="link mr-3" to="/Login">Login</Link>
        <Link className="link mr-3" to="/Register">Register</Link>
      </Nav>
    </Navbar>
  );
}
