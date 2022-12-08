
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
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
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const CreateExam = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
        <Col xl="4">
        <Card className="shadow">
          <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="text-uppercase text-muted ls-1 mb-1">
                      6 steps during a stong earthquake
                    </h3>

        <Card className="bg-secondary shadow border-0">
          
            <img src="https://www.phivolcs.dost.gov.ph/vault/infographics/Steps-during-Earthquake-and-COVID19-13May2020-v9.png"/>
          
        </Card>
                    
               
                  </div>
                </Row>
              </CardHeader>
              
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-green shadow">
              <CardHeader className="bg-transparent">
              <iframe width="730" height="618" src="https://www.youtube.com/embed/e-gdzd8UrNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </CardHeader>
              
            </Card>
          </Col>
          
        </Row>
        
      </Container>
    </>
  );
};

export default CreateExam;
