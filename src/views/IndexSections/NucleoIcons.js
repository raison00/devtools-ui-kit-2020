
import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class NucleoIcons extends React.Component {
  render() {
    return (
      <div className="section section-nucleo-icons">
        <img alt="..." className="path" src={require("assets/img/path3.png")} />
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <h2 className="title">DevTools Branding and Logos</h2>
              <h4 className="description">
              Dart DevTools is a suite of debugging and performance tools for Dart and Flutter. These tools are distributed in IDEs, the flutter tool, the webdev tool, and the devtools package.

The following table shows which tools you can use with common Dart app types.
              </h4>
              <div className="btn-wrapper">
                <Button
                  className="btn-round"
                  color="primary"
                  href="https://"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Branding
                </Button>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  href="https://dart.dev/tools/dart-devtools"
                  rel=""
                  size="lg"
                  target="_blank"
                >
                  Tools for common Dart app types
                </Button>
              </div>
            </Col>
          </Row>
         
        </Container>
      </div>
    );
  }
}

export default NucleoIcons;
