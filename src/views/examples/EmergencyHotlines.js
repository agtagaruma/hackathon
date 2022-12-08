
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  CardBody,
  Container,
  Button,
  Card,
  CardTitle,
  CardHeader,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const StudentDashboard = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      
      {/* Page content */}

      <Container className="mt--7" fluid>
        <Row>
          <Col xl="12">
            <Card className="shadow">
             <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="text-uppercase text-black ls-1 mb-3">
                      Emergency Hotlines 
                      <Button href="tel:114" className="bg-danger text-white ml-2"  > Call Directory Assistance</Button>
                    </h3>
                    
                    <div>
                      <h4>General Assistance</h4>
                    </div>
                    <div className="header bg-gradient-white">
                      <Container fluid>
                        <div className="header-body">
                          {/* Card stats */}
                          <Row>
                            {/* General Assistance */}
                            <Col className="mb-2" lg="6" xl="3">
                              <Card className="card-stats mb-2 mb-xl-0">
                                <CardBody >
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Bureau of Fire department
                                      </CardTitle>
                                      <Button href="tel:160" className="bg-danger ml-0 mt-2 mb-0 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2 mb-xl-0">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        disasters coord center
                                      </CardTitle>
                                      <Button href="tel:4421900" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2 mb-xl-0">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Emergency Medical svcs
                                      </CardTitle>
                                      <Button href="tel:4421911" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2 mb-xl-0">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        mayor's office
                                      </CardTitle>
                                      <Button href="tel:4423939" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                              </Col>
                          </Row>
                        </div>
                      </Container>
                    </div>
                    <hr/>
                    <div>
                      <h4>Police and Law Enforcement Agencies</h4>
                    </div>

                    <div className="header bg-gradient-white">
                      <Container fluid>
                        <div className="header-body">
                          {/* Card stats */}
                          <Row>
                            {/* General Assistance */}
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Baguio Police Station
                                      </CardTitle>
                                      <Button href="tel:166" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Anti-Crime Hotline 163
                                      </CardTitle>
                                      <Button href="tel:163" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        PMP-CMP Dangwa
                                      </CardTitle>
                                      <Button href="tel:4421911" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        NARCOM
                                      </CardTitle>
                                      <Button href="tel:4434720" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col className="mb-2" lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Bureu of Investigation
                                      </CardTitle>
                                      <Button href="tel:4427203" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col className="mb-2" lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Highway patrol
                                      </CardTitle>
                                      <Button href="tel:4424429" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </div>
                      </Container>
                    </div>

                    <hr/>
                    <div>
                      <h4>Hospital and Health Centers </h4>
                    </div>

                    <div className="header bg-gradient-white">
                      <Container fluid>
                        <div className="header-body">
                          {/* Card stats */}
                          <Row>
                            {/* General Assistance */}
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Baguio Gen Hospital
                                      </CardTitle>
                                      <Button href="tel:442-4216" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        BGHMC ER
                                      </CardTitle>
                                      <Button href="tel:4423465" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        BGH Stop Death Prog.
                                      </CardTitle>
                                      <Button href="tel:4435678" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Baguio Medical Center
                                      </CardTitle>
                                      <Button href="tel:4423338" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col className="mb-2" lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Baguio Health Dept.
                                      </CardTitle>
                                      <Button href="tel:4456671" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col className="mb-2" lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Fil-Chinese Hospital
                                      </CardTitle>
                                      <Button href="tel:4423245" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </div>
                      </Container>
                    </div>

                    <hr/>
                    <div>
                      <h4>Information and Assistance Center</h4>
                    </div>

                    <div className="header bg-gradient-white">
                      <Container fluid>
                        <div className="header-body">
                          {/* Card stats */}
                          <Row>
                            {/* General Assistance */}
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        pag-asa
                                      </CardTitle>
                                      <Button href="tel:4423464" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Youth & woman relat'n
                                      </CardTitle>
                                      <Button href="tel:4438980" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        AIDS-STD Hotline
                                      </CardTitle>
                                      <Button href="tel:4426018" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Child abuse hotline
                                      </CardTitle>
                                      <Button href="tel:4453800" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col className="mb-2" lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Pregnancy & Crisis Centr
                                      </CardTitle>
                                      <Button href="tel:4428193" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col className="mb-2" lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        BENECO
                                      </CardTitle>
                                      <Button href="tel:4422295" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col className="mb-2" lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Baguio Water District
                                      </CardTitle>
                                      <Button href="tel:4426539" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col className="mb-2" lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Drug Abuse Hotline
                                      </CardTitle>
                                      <Button href="tel:4425029" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col className="mb-2" lg="6" xl="3">
                              <Card className="card-stats mb-2 ">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase mb-0"
                                      >
                                        Department of Tourism
                                      </CardTitle>
                                      <Button href="tel:4428848" className="bg-danger ml-0 mt-2 mb-1 btn-block">
                                        <h5 className="text-white">Call Now</h5>
                                      </Button>
                                    </div> 
                                  </Row>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </div>
                      </Container>
                    </div>

                    


                  </div>
                </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default StudentDashboard;
