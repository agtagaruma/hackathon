//hook
import { useState,useEffect } from "react";
import { Alert } from 'reactstrap';
import axios from 'axios';
//Import routing
import { Link, useHistory } from "react-router-dom";

// reactstrap components
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
  Col,Progress
} from "reactstrap";

const Register = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [conPassword, setConfirmPassword] = useState("");
  const SERVER=process.env.REACT_APP_SERVER;
  //initial value for the user 
  const userValue = {
    email:'',
    password:'',
    fullName:'',
    address:'', //address of the user
    agency:'638db4d29eae4f873e1f4b9a',//agency type of the user
    userType:'', //type  //student or mentor
    status:'active',
  };
  const [user,setUser]=useState(userValue);
  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);
  const [error, setError] = useState(false);
  const history = useHistory();
  const [agency, setAgency]=useState([]);
  //loadagency
  useEffect( () => {
    loadAgency()
 }, []);

  //handle register submit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setVisible(false);
    if(user.password===conPassword){
      registerAccount();
      
    }else{
      setError('The password must be the same as the confirm password.');
      setVisible(true);
    }
    //history.push("/auth/login");
  };

  //Create user accounts
  const registerAccount=async()=>{
    await axios.post(`${SERVER}/users/register`, {
             user
         })
         .then(function (response) {
            if(response.status===204){
              alert('Congratulations! You have successfully registered!');
            }
            setIsSignup(false);
         })
         .catch(function (error) {
           if(error.response.status===302){
              setError(error.response.data);
           }else if(error.response.status===400){
            console.log(error);
              setError('Email is already taken!');
           }
             setVisible(true);
         });
  }
  //load agencies
  const loadAgency=async()=>{
    await axios.get(`${SERVER}/agencies`)
    .then(function (response) {
        setAgency(response.data)
    })
    .catch(function (error) {
        console.log(error.response.status);
        setError(error.response.status);
    });
  }

  //user type admin/encoder
  const getType = (e) => {
    let newUser=user;
    newUser.userType=e.target.name;
    setUser({...newUser});
    setIsSignup(true);
  };

  //2 way binding for the inputs
  const changeEventHandlerInputs=(event)=>{
    let newUser=user;
    switch(event.target.name){
      case'fullName':
        newUser.fullName=event.target.value;
      break;
      case'address':
        newUser.address=event.target.value;
      break;
      case'email':
        newUser.email=event.target.value;
      break;
      case'password':
        newUser.password=event.target.value;
      break;
      case'agency':
        newUser.agency=event.target.value;
      break;
      default:
        setConfirmPassword(event.target.value);
      break;
    }
    setUser({...newUser});
  }
 
  //render when the agency is empty
  if(agency.length<=0){
    return(
      <Col lg="6" md="8" className="h-50 d-inline-block">
        <Progress 
          animated
          className="my-61"
          color="warning"
          value={100}
          style={{height:'30px'}}
        >Loading...</Progress>
      </Col>
    )
  }

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5 ">
            {isSignup ? (
              <Form role="form" onSubmit={handleRegisterSubmit}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name={'fullName'}
                      placeholder="Full Name"
                      type="text"
                      onChange={changeEventHandlerInputs}
                      value={user.fullName}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i className="ni ni-square-pin"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="address"
                      placeholder="Address"
                      type="text"
                      onChange={changeEventHandlerInputs}
                      value={user.address}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="email"
                      placeholder="email"
                      type="email"
                      autoComplete="new-email"
                      onChange={changeEventHandlerInputs}
                      required
                      value={user.email}
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
                      name="password"
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      onChange={changeEventHandlerInputs}
                      value={user.password}
                      required
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
                    name="confirm-password"
                      placeholder="Confirm Password"
                      type="password"
                      autoComplete="new-password"
                      onChange={changeEventHandlerInputs}
                      required
                      value={conPassword}
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-bold-down" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <select style={{width:'80%', border:'none'}}
                      name="agency"
                      placeholder="Select Agency"
                      onChange={changeEventHandlerInputs}
                      value={user.agency}
                      >
                      {
                        agency.map(agencies=>{
                          return <option key ={agencies._id} value={agencies._id} >{agencies.agency}</option>
                        })
                      }
                    </select>
                  </InputGroup>
                </FormGroup>

                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                        required
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                <Alert color="info" isOpen={visible} toggle={onDismiss} className="bg-warning border-warning">
                  {error}
                </Alert>
                  <Button className="mt-4" color="primary" type="submit">
                    Create account
                  </Button>
                </div>
              </Form>
            ) : (
              <Card className="bg-secondary border-0">
                <h2 className=" align-self-center">Register As?</h2>
                <div className="d-flex justify-content-center">
                  <Button
                    name="admin"
                    className="mt-4"
                    color="primary"
                    type="button"
                    onClick={getType}
                  >
                    admin
                  </Button>
                  <Button
                    name="encoder"
                    className="mt-4"
                    color="primary"
                    type="button"
                    onClick={getType}
                  >
                    Encoder
                  </Button>
                </div>
              </Card>
            )}
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
