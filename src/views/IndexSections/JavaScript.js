
import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label
 
} from "reactstrap";



class JavaScript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: false,
      miniModal: false,
      formModal: false
    };
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  render() {
    return (
      <div className="section section-javascript" id="javascriptComponents">
        <img alt="..." className="path" src={require("assets/img/path5.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png")}
        />
        <Container>
          <h3 className="title mb-5">components</h3>
          <h4 className="mb-5">Modal</h4>
          <Row id="modals">
            <Col md="4">
              <Button
                color="primary"
                onClick={() => this.toggleModal("demoModal")}
              >
                Launch Modal
              </Button>
            </Col>
            <Col md="4">
              <Button
                color="warning"
                onClick={() => this.toggleModal("miniModal")}
              >
                Launch Modal Mini
              </Button>
            </Col>
            <Col md="4">
              <Button
                color="success"
                onClick={() => this.toggleModal("formModal")}
              >
                Launch Modal Form
              </Button>
            </Col>
            {/* Sart Demo Modal */}
            <Modal
              isOpen={this.state.demoModal}
              toggle={() => this.toggleModal("demoModal")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("demoModal")}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
                <h4 className="title title-up">Modal title</h4>
              </div>
              <div className="modal-body">
                <p>
                  Lorem ipsum blah blah blah
                </p>
              </div>
              <div className="modal-footer">
                <Button color="default" type="button">
                  Nice Button
                </Button>
                <Button
                  color="danger"
                  type="button"
                  onClick={() => this.toggleModal("demoModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
            {/* End Demo Modal */}
            {/* Start Mini Modal */}
            <Modal
              modalClassName="modal-mini modal-primary modal-mini"
              isOpen={this.state.miniModal}
              toggle={() => this.toggleModal("miniModal")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("miniModal")}
                >
                  <i className="tim-icons icon-simple-remove text-white" />
                </button>
                <div className="modal-profile">
                  <i className="tim-icons icon-single-02" />
                </div>
              </div>
              <div className="modal-body">
                <p>Always have an access to your profile</p>
              </div>
              <div className="modal-footer">
                <Button className="btn-neutral" color="link" type="button">
                  Back
                </Button>
                <Button
                  className="btn-neutral"
                  color="link"
                  onClick={() => this.toggleModal("miniModal")}
                  type="button"
                >
                  Close
                </Button>
              </div>
            </Modal>
            {/* End Mini Modal */}
            {/* Start Form Modal */}
            <Modal
              modalClassName="modal-black"
              isOpen={this.state.formModal}
              toggle={() => this.toggleModal("formModal")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("formModal")}
                >
                  <i className="tim-icons icon-simple-remove text-white" />
                </button>
                <div className="text-muted text-center ml-auto mr-auto">
                  <h3 className="mb-0">Sign in with</h3>
                </div>
              </div>
              <div className="modal-body">
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img alt="..." src={require("assets/img/github.svg")} />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img alt="..." src={require("assets/img/google.svg")} />
                  </Button>
                </div>
                <div className="text-center text-muted mb-4 mt-3">
                  <small>Or sign in with credentials</small>
                </div>
                <Form role="form">
                  <FormGroup className="mb-3">
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": this.state.passwordFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onFocus={e => this.setState({ passwordFocus: true })}
                        onBlur={e => this.setState({ passwordFocus: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup check className="mt-3">
                    <Label check>
                      <Input defaultChecked type="checkbox" />
                      <span className="form-check-sign" />
                      Remember me!
                    </Label>
                  </FormGroup>
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="button">
                      Sign in
                    </Button>
                  </div>
                </Form>
              </div>
            </Modal>
            {/* End Form Modal */}
          </Row>
          <br />
          <br />
          <h4 className="mb-5 mt-3">Datepicker</h4>
          <Row>
            <Col md="4">
              <div className="datepicker-container">
                <FormGroup>
                  <ReactDatetime
                    inputProps={{
                      className: "form-control",
                      placeholder: "Date Picker Here"
                    }}
                  />
                </FormGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <h4 className="mb-5 mt-3">Popovers</h4>
              <Button
                color="default"
                data-container="body"
                data-content="Here will be some very useful information about his popover."
                data-placement="top"
                id="tooltip657685043"
                size="sm"
                type="button"
              >
                On top
              </Button>
              <UncontrolledPopover placement="top" target="tooltip657685043">
                <PopoverHeader>Popover on Top</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about this popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                data-container="body"
                data-content="Here will be some very useful information about this popover.<br>
 Here will be some very useful information about this popover."
                data-placement="right"
                id="tooltip72798464"
                size="sm"
                type="button"
              >
                On right
              </Button>
              <UncontrolledPopover placement="right" target="tooltip72798464">
                <PopoverHeader>Popover on Right</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about Branded and styled ui popover.
                  <br /> Here will be some very useful information about Branded and styled ui
                  popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                data-container="body"
                data-content="Here will be some very useful information about his popover."
                data-placement="bottom"
                id="tooltip995717467"
                size="sm"
                type="button"
              >
                On bottom
              </Button>
              <UncontrolledPopover placement="bottom" target="tooltip995717467">
                <PopoverHeader>Popover on Bottom</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about Branded and styled ui popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                data-color="primary"
                data-container="body"
                data-content="Branded and styled ui popover."
                data-placement="left"
                id="tooltip31162359"
                size="sm"
                type="button"
              >
                On left
              </Button>
              <UncontrolledPopover placement="left" target="tooltip31162359">
                <PopoverHeader>Popover On Left</PopoverHeader>
                <PopoverBody>
                  Here will be a branded and styled ui.
                </PopoverBody>
              </UncontrolledPopover>
            </Col>
            <Col md="6">
              <h4 className="mb-5 mt-3">Tooltips</h4>
              <Button
                className="btn-tooltip"
                color="default"
                id="tooltip376048342"
                size="sm"
              >
                On left
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="left"
                target="tooltip376048342"
              >
                Tooltip on left
              </UncontrolledTooltip>
              <Button
                className="btn-tooltip"
                color="default"
                id="tooltip297889956"
                size="sm"
              >
                On top
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="top"
                target="tooltip297889956"
              >
                Tooltip on top
              </UncontrolledTooltip>
              <Button
                className="btn-tooltip"
                color="default"
                id="tooltip789511871"
                size="sm"
              >
                On bottom
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="bottom"
                target="tooltip789511871"
              >
                Tooltip on bottom
              </UncontrolledTooltip>
              <Button
                className="btn-tooltip"
                color="default"
                id="tooltip353488548"
                size="sm"
              >
                On right
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="right"
                target="tooltip353488548"
              >
                Tooltip on right
              </UncontrolledTooltip>
              <div className="clearfix" />
              <br />
              <br />
            </Col>
          </Row>
        </Container>
   
      </div>
    );
  }
}

export default JavaScript;
