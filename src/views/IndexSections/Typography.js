
import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <div className="section section-typo">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path3.png")}
        />
        <Container>
          <h3 className="title">Typography</h3>
          <div id="typography">
            <Row>
              <Col md="12">
                <div className="typography-line">
                  <h1>
                    <span>Header 1</span>
                    DevTools UI Kit: Living Style Guide
                  </h1>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Header 2</span>
                    DevTools UI Kit: Living Style Guide
                  </h2>
                </div>
                <div className="typography-line">
                  <h3>
                    <span>Header 3</span>
                    DevTools UI Kit: Living Style Guide
                  </h3>
                </div>
                <div className="typography-line">
                  <h4>
                    <span>Header 4</span>
                    DevTools UI Kit: Living Style Guide
                  </h4>
                </div>
                <div className="typography-line">
                  <h5>
                    <span>Header 5</span>
                    DevTools UI Kit: Living Style Guide
                  </h5>
                </div>
                <div className="typography-line">
                  <h6>
                    <span>Header 6</span>
                    DevTools UI Kit: Living Style Guide
                  </h6>
                </div>
                <div className="typography-line">
                  <p>
                    <span>Paragraph</span>Maintains The Expected Look And Feel Of The Complete Suite Of Tools. It Is The Single Source Of Truth For Teams (Product, Ux, Engineering) To Refer To For UI Changes, For Iterations, And When Developing New Features.
                  </p>
                </div>
                <div className="typography-line">
                  <span>Quote</span>
                  <blockquote>
                    <p className="blockquote blockquote-info">
                    Maintains The Expected Look And Feel Of The Complete Suite Of Tools. It Is The Single Source Of Truth For Teams (Product, Ux, Engineering) To Refer To For UI Changes, For Iterations, And When Developing New Features. <br />
                      <br />
                      <small>- Noaa</small>
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                  <span>Muted Text</span>
                  <p className="text-muted">
                  DevTools UI Kit: Living Style Guide
                  </p>
                </div>
                <div className="typography-line">
                  <span>Primary Text</span>
                  <p className="text-primary">
                  DevTools UI Kit: Living Style Primary Text.
                  </p>
                </div>
                <div className="typography-line">
                  <span>Info Text</span>
                  <p className="text-info">
                  DevTools UI Kit: Living Style Guide Info Text.
                  </p>
                </div>
                <div className="typography-line">
                  <span>Success Text</span>
                  <p className="text-success">
                  DevTools UI Kit: Living Style Guide Success Text
                  </p>
                </div>
                <div className="typography-line">
                  <span>Warning Text</span>
                  <p className="text-warning">
                    DevTools UI Kit: Living Style Guide Warning Text
                  </p>
                </div>
                <div className="typography-line">
                  <span>Danger Text</span>
                  <p className="text-danger">
                    DevTools UI Kit: Living Style Guide Danger Text
                  </p>
                </div> className="typography-line">
                  <h2>
                    <span>Small Tag</span>
                    Header with small subtitle <br />
                    <small>Use "small" tag for the headers</small>
                  </h2>
              </Col>
            </Row>
          </div>
          <div className="space-50" />
    
        </Container>
      </div>
    );
  }
}

export default Typography;
