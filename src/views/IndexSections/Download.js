
import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h2 className="title">
                Do you read titles like this?
              </h2>
              <h4 className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini
              </h4>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round"
                color="info"
                href=""
                role="button"
                size="lg"
              >
                Button for something
              </Button>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row className="row-grid align-items-center my-md">
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon btn-round"
                color="twitter"
                href="https://twitter.com/r_FlutterDev"
                target="_blank"
                id="twitter"
                size="lg"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="twitter">
                Tweet!
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-round"
                color="github"
                href="https://github.com/flutter/devtools"
                id="tooltip877922017"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip877922017">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Download;
