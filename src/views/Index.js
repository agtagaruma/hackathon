
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";



// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {

  
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  // const logo = require('../assets/img/brand/infoGraphics.jpg'); 

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-4" xl="6">
            <Card className="bg-gradient-danger mt-10 shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-white mb-0">Heart attack emergency aid</h2>
                    <br/>
                      <iframe width="530" height="288" src="https://www.youtube.com/embed/CRSmVTWORKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  <div className="col">
                    
                  </div>
                </Row>
              </CardHeader>
              
            </Card>
          </Col>
          <Col className="mb-4" xl="6">
            <Card className="bg-gradient-danger shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-white mb-0">Head injury first aid guide</h2>
                    <br/>
                      <iframe width="530" height="288" src="https://www.youtube.com/embed/OUXb2FuO_wM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  <div className="col">
                    
                  </div>
                </Row>
              </CardHeader>
              
            </Card>
          </Col>
          <Col className="mb-4" xl="6">
            <Card className="bg-gradient-danger shadow">
              <CardHeader className="bg-transparent mt-10">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-white mb-0">Burns First Aid</h2>
                    <br/>
                      <iframe width="530" height="288" src="https://www.youtube.com/embed/hfOJHjGw6Z0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  <div className="col">
                    
                  </div>
                </Row>
              </CardHeader>
              
            </Card>
          </Col>

          <Col className="mb-4" xl="6">
            <Card className="bg-gradient-danger shadow">
              <CardHeader className="bg-transparent mt-10">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-white mb-0">Early signs of stroke</h2>
                    <br/>
                      <iframe width="530" height="288" src="https://www.youtube.com/embed/fBcMIfPP_g0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  <div className="col">
                    
                  </div>
                </Row>
              </CardHeader>
              
            </Card>
          </Col>

          
          <Col className="mb-4" xl="6">
            <Card className="bg-gradient-danger shadow">
              <CardHeader className="bg-transparent mt-10">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-white mb-0">Convulsion First Aid</h2>
                    <br/>
                      <iframe width="530" height="288" src="https://www.youtube.com/embed/D8LDGKCMDCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  <div className="col">
                    
                  </div>
                </Row>
              </CardHeader>
              
            </Card>
          </Col>

          <Col className="mb-4" xl="6">
            <Card className="bg-gradient-danger shadow">
              <CardHeader className="bg-transparent mt-10">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-white mb-0">Pagkakaiba ng Dengu sa Covid19</h2>
                    <br/>
                      <iframe width="530" height="288" src="https://www.youtube.com/embed/ak5CX4nnp04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  <div className="col">
                    
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

export default Index;
