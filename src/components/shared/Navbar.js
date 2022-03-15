import React from 'react';
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'

const Nav = () => {
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src= {logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            Bike Catalog
            </Navbar.Brand>
            </Container>
        </Navbar>
        </>
    )
}

export default Nav