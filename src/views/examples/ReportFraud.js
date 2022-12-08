
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components

import PropTypes from 'prop-types';

import {
  CardBody,
  Container,
  Button,
  Card,
  CardHeader,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  UncontrolledTooltip,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const StudentDashboard = ({ direction, ...args }) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);


  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page Content */}

      <Container className="mt--7" fluid>
        <Row>
        <Col xl="4">
        <Card className="shadow">
          <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="text-uppercase text-black ls-1 mb-3">
                      REPORT FRAUD
                    </h3>

                    <Card className="bg-secondary shadow border-0">
                      
                    <Form role="form">
                      <FormGroup>
                        <h4 className="ml-2">Concerned Agency</h4>
                        {/* <!-- Example single danger button --> */}
                        <div className="d-flex p-1">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                          <DropdownToggle caret>Select One</DropdownToggle>
                          <DropdownMenu {...args}>
                            
                            <DropdownItem> Securities and Exchange Commission SEC</DropdownItem>
                            <DropdownItem> Department of Trade and Industry DTI</DropdownItem>
                            <DropdownItem> National Telecommunications Commission NTC</DropdownItem>
                            <DropdownItem> Philippine National Police PNP</DropdownItem>
                            <DropdownItem> National Bureau of Investigation NBI</DropdownItem>
                            <DropdownItem> PhilHealth </DropdownItem>
                            <DropdownItem> Social Security System SSS</DropdownItem>
                            <DropdownItem> Department of Labor and Emplyment DOLE </DropdownItem>
                            <DropdownItem> Department of Migrant Workers DMW</DropdownItem>
                            
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                      </FormGroup>

                      <FormGroup>
                      <h4 className="ml-2">Description</h4>
                        <InputGroup className="input-group-alternative mb-3">                        
                          <Input placeholder="Enter  description" type="text" />
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                      <h4 className="ml-2">Involved person or establishment</h4>
                        <InputGroup className="input-group-alternative mb-3">                        
                          <Input placeholder="Enter complete name" type="text" />
                        </InputGroup>
                      </FormGroup>


                      <div class="mb-3">
                        <label for="formFile" class="form-label">*Upload Proof</label>
                        <input class="form-control" type="file" id="formFile"/>
                      </div>
                    
                      
                      
                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="button">
                        Create Post
                      </Button>
                    </div>
                  </Form>
                      
                    </Card>
                  </div>
                </Row>
              </CardHeader>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-white shadow">
              <h3 className="ml-3 mt-3">
                PREVIEW
              </h3>
              <CardHeader className="bg-transparent">
              <div >
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>






              </div>
              </CardHeader>
              
            </Card>
          </Col>
          
        </Row>
        
      </Container>
    </>
  );
};

export default StudentDashboard;
