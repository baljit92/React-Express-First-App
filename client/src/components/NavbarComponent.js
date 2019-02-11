import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";


class ExampleNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      userFullName: ""
    };
  }

  componentDidMount() {
    this.setState({
      userFullName: localStorage.getItem('name')
    });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="dark" dark expand="md">
      
          <NavbarBrand href="/home">ACT Group</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home/">  
                <IconContext.Provider value={{ color: "rgb(60, 179, 113)", className: "global-class-name", size: "1.5em" }}>
                      <div>
                        <FaUserCircle />
                         <span className="ml-1">{ this.state.userFullName }</span>
                      </div>
                    </IconContext.Provider> 
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default ExampleNavbar;