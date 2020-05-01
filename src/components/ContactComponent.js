import React,{Component} from 'react';
import {Breadcrumb, BreadcrumbItem ,Label,Row, Col,Button} from 'reactstrap'
import {Control,LocalForm,Errors} from "react-redux-form"
import {Link} from 'react-router-dom'
class Contact extends Component {

    constructor(props)
    {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    } 

    handleSubmit(values)
    {
        console.log("Current State is:" +JSON.stringify(values));
        alert("Current State is:" +JSON.stringify(values));
    }
    render()
    {
    return(
        <div className="container">
             <div className="row">
                        <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">HOME</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Contact Us</h3>
                        </div>
                    </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="www.skype.com"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send Your Feedback</h3>
                    <div className="col-12 col-md-9">
                       <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}> 
                                <Control.text model=".firstname" 
                                    className="form-control"
                                    id="firstname" name="firstname"
                                    placeholder="First Name"/>
                                </Col>
                           </Row>
                           <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}> 
                                <Control.text onChange={ this.handleInputChange}
                                    className="form-control"
                                    model=".lastname"
                                    type="text" id="lastname" name="lastname"
                                    placeholder="Last Name"/>
                                </Col>
                           </Row>

                           <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel</Label>
                                <Col md={10}> 
                                <Control.text 
                                model=".telnum"
                                className="form-control"
                                type="tel" id="telnum" name="telnum"
                                placeholder="Tel. num"/>
                                </Col>
                            </Row>

                           <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}> 
                                <Control.text  
                                    type="email" id="email" name="email"
                                    model=".email"
                                    className="form-control"
                                    placeholder="Email" />
                                </Col>
                            </Row>
                             
                            <Row className="form-group">
                                 <Col md={{size:6,offset:2}}>
                                     <div class="form-check">
                                         <Label check>
                                             <Control.checkbox model=".agree" 
                                             className="form-check-input"
                                              name="agree" >
                                                  </Control.checkbox>
                                                  {" "}
                                             <strong>May we Contact you?</strong>
                                         </Label>
                                     </div>
                                 </Col>
                                 <Col md={{size:3,offset:1}}>
                                     <Control.select  name="contactType" 
                                     model=".contactType"
                                     className="form-control"
                                         >
                                        <option>TEL</option>   
                                        <option>EMAIL</option>  
                                     </Control.select>
                                 </Col>
                             </Row>

                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}> 
                                <Control.textarea model=".message" id="message" name="message" rows="12" 
                                className="form-control" />       
                                </Col>
                            </Row>
                            
                           <Row className="form-group">
                                <Col md={{size:10,offset:2}}>
                                    <Button type="Submit" color="primary">SEND FEEDBACK</Button>
                                </Col>
                            </Row>
                        </LocalForm> 
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Contact;