import React, { Component } from 'react';
import "../styles/NavHeader.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class NavHeader extends Component {
    state = {
        isOpen: false,
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
                <Navbar dark expand="md">
                    <NavbarBrand href="/">SR</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#lander">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#reviews">Reviews</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
        )
    }
}

export default NavHeader;