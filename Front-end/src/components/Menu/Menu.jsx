import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
 import history from '../../history/history';
 import './Menu.css';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      Title: '',
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen //props for navbar
    });
  }

  componentDidMount(){
    //trying to update navbar depending on user ID
    if (this.props.User !== undefined)
    {
    this.setState({LoggedUser: this.props.User, UserID: this.props.ID})
    this.setState({Title: "LOGGED IN"})
    }
    else
    {
      this.setState({Title: "LOGIN/REGISTER"})
    }
  }


  render() {

    return (
      //using reactstrap navbar
      <div>
        <Navbar className = "menu" dark expand="md">
          <NavbarBrand href="/"><img src={require('./images/home.png')} width = "40px" height = "40px"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto1" navbar>
              <NavItem>
                <NavLink style={{color: 'seashell'}}  href="/Ads"><b>ADS</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: 'seashell'}}  href="/Profile"><b>YOUR PROFILE</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: 'seashell'}}  href="/Login"><b>{this.state.Title}</b></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
