

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button,Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import React, { useState } from 'react';

const Header = () => {

  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState({title:'title',content:'content'});

  const toggle = (event) => {
    setModal(!modal); 
    let newModalValue=modalValue;
    switch(event.target.name){
      case"sunog":
          newModalValue.title="Mga dapat gawin kapag may sunog";
          newModalValue.content=
          <iframe width="750" height="500" src="https://www.youtube.com/embed/b6e5KPVbGkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
        break;
        case"lindol":
          newModalValue.title="Mga dapat gawin kapag may lindol";
          newModalValue.content=
          <iframe width="750" height="500" src="https://www.youtube.com/embed/Rho9TmZiar4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        break;
        case"landslide":
          newModalValue.title="Mga dapat gawin kapag may landslide";
          newModalValue.content=
          <iframe width="750" height="500" src="https://www.youtube.com/embed/UH-SJuSdLDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        break;
      default:
          newModalValue.title="Mga dapat gawin kapag may Bagyo";
          newModalValue.content=
          <iframe width="750" height="500" src="https://www.youtube.com/embed/7WxUgGfiHb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        break;
    }
    setModalValue({...newModalValue})

  };
  return (
    <>
      <div className="header bg-gradient-warning pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase mb-0"
                        >
                          Mga Dapat gawin kapag may <h1> sunog</h1>

                        
                        </CardTitle>
                        <Button className="h2 font-weight-bold mb-0 mt-1 bg-danger text-white" name ="sunog" onClick={toggle}>
                          ALAMIN <i className="fas fa-hand-pointer text-medium" />
                        </Button >
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-fire text-medium" />
                        </div>
                      </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase mb-0"
                        >
                          Mga Dapat gawin kapag may <h1>Lindol</h1>

                        
                        </CardTitle>
                        <Button className="h2 font-weight-bold mb-0 mt-1 bg-yellow text-black"  name ="lindol" onClick={toggle}>
                          ALAMIN <i className="fas fa-hand-pointer text-medium" />
                        </Button>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-black rounded-circle shadow">
                          <i className="ni ni-sound-wave text-large" />
                        </div>
                      </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase mb-0"
                        >
                          Mga Dapat gawin kapag may <h1>bagyo</h1>

                        
                        </CardTitle>
                        <Button className="h2 font-weight-bold mb-0 mt-1 bg-blue text-white"  name ="bagyo" onClick={toggle}>
                          ALAMIN <i className="fas fa-hand-pointer text-medium" />
                        </Button>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-blue text-white rounded-circle shadow">
                          <i className="fa fa-cloud-rain" />
                        </div>
                      </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>

              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase mb-0"
                        >
                          Mga Dapat gawin kapag may <h1>Landslide</h1>

                        
                        </CardTitle>
                        <Button className="h2 font-weight-bold mb-0 mt-1 bg-green text-dark text-center"  name ="landslide" onClick={toggle}>
                          ALAMIN <i className="fas fa-hand-pointer text-medium" />
                        </Button>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-green text-dark rounded-circle shadow">
                          <i className="fa fa-mountain" />
                        </div>
                      </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>
              
              
            </Row>
          </div>
        </Container>
      </div>


      {/* modal */}


     
      <Modal className="modal-dialog modal-lg pt-1" isOpen={modal} toggle={toggle}>
        <ModalHeader className=" mb--4 text-uppercase text-bold" toggle={toggle}>{modalValue.title}</ModalHeader>
        
        <ModalBody className="">
          {
            modalValue.content
          }
        </ModalBody>
        
      </Modal>
      

    </>
  );
};

export default Header;
