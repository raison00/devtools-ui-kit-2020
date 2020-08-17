
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h1 className="title">DevTools UI Kit</h1>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Overview
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/landing-page" tag={Link}>
                    DevTools Landing Page
                  </NavLink>
                </NavItem>
                <NavItem>
            
                </NavItem>
                <NavItem>
                  <NavLink to="/profile-page" tag={Link}>
                  DevTools Living Style Guide
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
           
          
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
