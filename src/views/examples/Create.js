import Header from "components/Headers/Header.js";
import { useState, useEffect } from "react";
import axios from 'axios';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
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
  const id = JSON.parse(localStorage.getItem('id'));
  //initial value of the guides
  const guidesValue={
    user:id,
    title :'',
    briefDescription : '',
    guide : [],
    contactNumber : [],
    email: '',
    video : []
  }
  const [guides,setGuides]=useState(guidesValue);
  const SERVER=process.env.REACT_APP_SERVER;
  const [uploadFile,setUpload]=useState(false);
  const [refresh, setRefresh]=useState(false);
  const [update, setUpdate]=useState(false);
  const [savedGuide, setSavedGuides]=useState(false);
  const [page,setPage]=useState(0);

  useEffect( () => {
    loadGuides();
    setRefresh(false);
 }, [refresh,page]);

 const loadGuides=async()=>{
  await axios.get(`${SERVER}/users/${id}`)
    .then((result) => {
      setSavedGuides(result.data.guides);
    });
  }

  //events for 2 way binding
  const onChangeHandler=(event)=>{
    let newGuides=guides;
    const name=event.target.name;
    const index=name.split('-');

    switch(name){
      case`step-${index[1]}`:
        let newGuide=newGuides.guide;
        newGuide[Number(index[1])]=event.target.value;
        newGuides.guide=[...newGuide];
      break;
      case'title':
        newGuides.title=event.target.value;
      break;
      case'description':
        newGuides.briefDescription=event.target.value;
      break;
      case'email':
        newGuides.email=event.target.value;
      break;
      case`contact-${index[1]}`:
        let newContact=newGuides.contactNumber;
        newContact[Number(index[1])]=event.target.value;
        newGuides.contactNumber=[...newContact];
      break;
      default:
        break;
    }
    setGuides({...newGuides});
  }

  //add guides 
  const onClickHandlerAddGuide=()=>{
    let newGuide=guides;
    newGuide.guide.push('');
    setGuides({...newGuide});
  }
  //remove guides
  const onClickHandlerRemoveGuide=(event)=>{
    const name=event.target.name;
    let newGuide=guides;
    newGuide.guide.splice(Number(name),1)
    setGuides({...newGuide});
  }
  //add Contact Number
  const onClickHandlerAddContact=()=>{
    let newContact=guides;
    newContact.contactNumber.push('');
    setGuides({...newContact});
  }
  //remove Contact Number
  const onClickHandlerRemoveContact=(event)=>{
    const name=event.target.name;
    let newContact=guides;
    newContact.contactNumber.splice(Number(name),1)
    setGuides({...newContact});
  }
  //add video
  const onClickHandlerAddVideo=()=>{
    let newVideos=guides;
    newVideos.video.push('.jpg');
    setGuides({...newVideos});
  }
  //remove videos
  const onClickHandlerRemoveUpload=(event)=>{
    const name=event.target.name;
    let newVideos=guides;
    newVideos.video.splice(Number(name),1)
    setGuides({...newVideos});
  }
  const handleFileSelect=(event)=>{
    let newGuides=guides;
    const name=event.target.name;
    const index=name.split('-');

    if(event.target.files[0]){
      
      let newUpload=newGuides.video;
      newUpload[Number(index[1])]=event.target.files[0].name;
      newGuides.video=[...newUpload];
      setGuides({...newGuides});
      setUpload(true);
      upload(event.target.files[0]);
    }
  }
//upload files
  const upload=async(file)=>{
    const formData = new FormData();
    formData.append('selectedFile', file);
    try {
      const response = await axios({
        method: 'post',
        url: `${SERVER}/api/v1/uploads`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then(response=>{
        setUpload(false);
      });
        
    } catch(error) {
        console.log(error);
        setUpload(false);
    }
  }
  //save guides
  const onSubmitHandler=async(event)=>{
    event.preventDefault();

    if(update){
      await axios.put(`${SERVER}/guides`, {
        guides
      })
      .then(function (response) {
        if(response.status===204){
          alert('Post Updated Successfully!');
          setRefresh(true);
          setUpdate(false);
          setGuides(guidesValue);
        }
      })
      .catch(function (error) {
        if(error.response.status===400){
            console.log(error);
        }
      });
    }else{
      await axios.post(`${SERVER}/guides`, {
        guides
      })
      .then(function (response) {
        if(response.status===204){
          alert('Post Save Successfully!');
          setRefresh(true);
          setUpdate(false);
        }
      })
      .catch(function (error) {
        if(error.response.status===400){
            console.log(error);
        }
      });
    }


  }
  const onClickEventHandlerNumber=(event)=>{
    const name=event.target.name;
    setPage(name);
  }
  const onClickHandlerEdit=()=>{
    setGuides(savedGuide[page]);
    setUpdate(true);
  }

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
                      Create Informational Guide
                    </h3>

                    <Card className="bg-secondary shadow border-0">
                      
                    <Form role="form" onSubmit={onSubmitHandler}>
                      <FormGroup>
                      <h4 className="ml-2">Title</h4>
                        <InputGroup className="input-group-alternative mb-3">                        
                          <Input placeholder="Enter Title" type="text" name="title" value={guides.title} onChange={onChangeHandler} required/>
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                      <h4 className="ml-2">Brief description</h4>
                        <InputGroup className="input-group-alternative mb-3">                        
                          <Input placeholder="Enter a brief description" type="text" name="description" value={guides.briefDescription} onChange={onChangeHandler} required/>
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                      <h4 className="ml-2">Brief description</h4>
                        <Button color="primary" onClick={onClickHandlerAddGuide}>
                        <i className="fas fa-plus-circle text-medium"/> Guide
                        </Button>
                      </FormGroup>
                    
                      {
                        
                        (guides.guide.length>0) &&

                        guides.guide.map((guidesValue,index)=>{
                          return <FormGroup key={index}>
                                <Button name={index} color="danger" onClick={onClickHandlerRemoveGuide} size="sm" style={{fontSize:'7pt', fontWeight:'100'}}>
                                Delete
                                </Button>
                                  <h4 className="ml-2">Step { (index+1)}</h4>
                                    <InputGroup className="input-group-alternative mb-3">                        
                                      <Input placeholder="Enter Guide" type="text" name={`step-${index}`} onChange={onChangeHandler} value={guides.guide[index]} required/>
                                    </InputGroup>
                                  </FormGroup>
                        })
                      }

                      <FormGroup>
                      <h4 className="ml-2">Email Address</h4>
                        <InputGroup className="input-group-alternative mb-3">                        
                          <Input placeholder="Enter email" type="email" name="email" value={guides.email} onChange={onChangeHandler} required/>
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                      <h4 className="ml-2">Contact Number</h4>
                        <Button color="primary" onClick={onClickHandlerAddContact}>
                        <i className="fas fa-plus-circle text-medium"/> Contact #
                        </Button>
                      </FormGroup>

                      {
                        (guides.contactNumber.length>0) &&
                        guides.contactNumber.map((contact,index)=>{
                          return <FormGroup key={index}>
                                <Button name={index} color="danger" onClick={onClickHandlerRemoveContact} size="sm" style={{fontSize:'7pt', fontWeight:'100'}}>
                                Delete
                                </Button>
                                  <h4 className="ml-2">Conatact # { (index+1)}</h4>
                                    <InputGroup className="input-group-alternative mb-3">                        
                                      <Input placeholder="Enter Contact Number" type="text" name={`contact-${index}`} onChange={onChangeHandler} value={guides.contactNumber[index]} required/>
                                    </InputGroup>
                                  </FormGroup>
                        })
                      }

                      <FormGroup>
                      <h4 className="ml-2">Upload Image/video</h4>
                        <Button color="primary" onClick={onClickHandlerAddVideo}>
                        <i className="fas fa-plus-circle text-medium"/> Upload
                        </Button>
                      </FormGroup>
                      {
                        (uploadFile)
                         && 
                        <Progress 
                          animated
                          className="my-61"
                          color="warning"
                          value={100}
                          style={{height:'20px'}}
                          >   
                           Upload file please wait...
                        </Progress>
                      }
                      {
                        (guides.video.length>0) &&
                          guides.video.map((vid,index)=>{
                            console.log(vid)
                            return <FormGroup key={index}>
                            <div className="mb-3">
                              <Button name={index} color="danger" onClick={onClickHandlerRemoveUpload} size="sm" style={{fontSize:'7pt', fontWeight:'100'}}>
                                Delete
                                </Button>
                              <input className="form-control " type="file" id="formFile" name={`upload-${index}`} style={{width:'110px',marginTop:'12px'}} onChange={handleFileSelect} />
                            {  vid }
                          </div></FormGroup>
                        })
                      }
                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="submit">
                        {(update) ? 'Update Post':'Create Post'}
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
              <Button color="success" size="sm" className="ml-3 mt-3" style={{width:'50px'}} onClick={onClickHandlerEdit}>Edit</Button>
              <CardHeader className="bg-transparent">
              <div >
               {
                (savedGuide.length>0) &&
                savedGuide.map((guideVal,index)=>{
                  if(index==page){
                    const date=new Date(guideVal.createdAt)
                  return <>
                    <h4 className="ml-2">{`Date Posted ${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`}</h4>
                    <FormGroup key={index}>
                      <h4 className="ml-2">TITLE</h4>
                      <InputGroup className="input-group-alternative mb-3">                        
                        <Input  type="text" disabled value={guideVal.title}/>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <h4 className="ml-2">Brief Description</h4>
                      <InputGroup className="input-group-alternative mb-3">                        
                        <Input  type="text" disabled value={guideVal.briefDescription}/>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <h4 className="ml-2">Email</h4>
                      <InputGroup className="input-group-alternative mb-3">                        
                        <Input  type="text" disabled value={guideVal.email}/>
                      </InputGroup>
                    </FormGroup>
                    <h4 className="ml-2">Contact Number(s)</h4>
                    {
                      (guideVal.contactNumber.length>0) &&
                      guideVal.contactNumber.map((contactVal,index)=>{
                        return <FormGroup key={index}>
                                <InputGroup className="input-group-alternative mb-3">                        
                                  <Input  type="text" disabled value={contactVal}/>
                                </InputGroup>
                              </FormGroup>
                      })
                    }
                    <h4 className="ml-2">Informational Guides</h4>
                    {
                      (guideVal.guide.length>0) &&
                      guideVal.guide.map((guideValue,index)=>{
                        return <FormGroup key={index}>
                                {`${index+1}. `}{guideValue}
                              </FormGroup>
                      })
                    }
                    
                    {
                      (guideVal.video.length>0) &&
                      guideVal.video.map((videoVal,index)=>{
                        const ext=videoVal.split('.')
                        return <FormGroup key={index}>
                                {(ext[1].toUpperCase()==='RAW' || 
                                ext[1].toUpperCase()==='JPG'|| ext[1].toUpperCase()==='PNG'||
                                 ext[1].toUpperCase()==='GIF'|| ext[1].toUpperCase()==='TIFF') ? <img alt={videoVal} src={`${SERVER}/${videoVal}`} className="img-thumbnail"/> : <video  src={`${SERVER}/${videoVal}`} controls type="video/mp4" className="img-thumbnail"/>}
                              </FormGroup>
                      })
                    }

                  </>
                  }
                })
              }
              {
                  (savedGuide.length>0) &&
                  savedGuide.map((guideVal,index)=>{
                    return <Button color="success"
                    size="sm" name={index} onClick={onClickEventHandlerNumber}>{(index+1)}</Button>
                  })
               }
                
              </div>
              </CardHeader>
              
            </Card>
          </Col>
          
        </Row>
        
      </Container>
    </>
  );
};

export default Register;
