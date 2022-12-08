//hook
import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
//import Cookie from 'universal-cookie'
import { Alert } from 'reactstrap';

//Reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  const SERVER=process.env.REACT_APP_SERVER;
  //const cookie = new Cookie();
  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  const handleLogin = async(e) => {
    e.preventDefault();
    setVisible(false);
    if (email === "" || password === "") {
      setErrorMessage("Empty email/password field");
      setVisible(true);
    }
    try {
      await axios.post(`${SERVER}/users/login`, {
          email: email,
          password: password,
        })
        .then((result) => {
          //cookie.set('id',result.data._id , { path: '/' })
          localStorage.setItem('id', JSON.stringify(result.data._id));
          console.log('Login successfull');
          history.push("/admin/index");
        });
    } catch (Error) {
      setErrorMessage("Invalid email/password");
      setVisible(true);
    }
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={handleLogin}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              {
                errorMessage && (
                  <Alert color="info" isOpen={visible} toggle={onDismiss} className="bg-warning border-warning">
                  {errorMessage}
                </Alert>)
              }
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
              
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
