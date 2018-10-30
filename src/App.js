import React, { Component } from 'react';
import './App.css';
import Etusivu from './views/Etusivu';
import Paikka from './views/Paikka';
import Kirjaudu from './views/Kirjaudu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigaatio />
          <Switch>
            <Route exact path="/" component={Etusivu}></Route>
            <Route path="/paikat" component={Paikka}></Route>
            <Route path="/kirjaudu" component={Kirjaudu}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

class Navigaatio extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpens
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ETUSIVU</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/kirjaudu/">Kirjaudu</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
