import React from 'react';
import {Button,Modal,ModalHeader,ModalBody,Input,Label,FormGroup,Row, Col} from 'reactstrap'
import {Control,LocalForm,Errors} from "react-redux-form"

const required=(val)=>val && val.length;
const maxLength=(len)=>(val)=>!(val) ||(val.length<=len);
const minLength=(len)=>(val)=>(val) &&(val.length>=len);
class CommentForm extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            isModalOpen:false
        }
        this.toggleModal=this.toggleModal.bind(this);
    }

    handleSubmit(values)
    {
        console.log("Current State is:" +JSON.stringify(values));
        alert("Current State is:" +JSON.stringify(values));
        this.toggleModal();
    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen,
        });
    }

    render()
    {

        return(
            
            <div>
                 <Button onClick={this.toggleModal} className="btn-light btn-outline-secondary"><span  className="fa fa-pencil fa-lg" >Add Comment</span></Button>
                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} >LOGIN</ModalHeader>
                    <ModalBody>
                        
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                         <Row className="form-group">
                                <Label htmlFor="rating" md={4}>Rating</Label>
                                <Col md={12}> 
                                <Control.select  name="rating" 
                                        id="rating"
                                     model=".rating"
                                     className="form-control"
                                         >
                                        <option>1</option>   
                                        <option>2</option>  
                                        <option>3</option> 
                                        <option>4</option> 
                                        <option>5</option> 
                                     </Control.select>
                            </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={4}>Your Name</Label>
                                <Col md={12}> 
                                <Control.text model=".name" 
                                    className="form-control"
                                    id="name" name="name"
                                    placeholder="Your Name"
                                    validators={{
                                        required,minLength:minLength(3),maxLength:maxLength(15)
                                    }}
                                    />
                                    <Errors className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={
                                        {
                                            required:"Required",
                                            minLength:"Must be greater than 2 char",
                                            maxLength:"Must be 15 characters or less"
                                        }
                                    }
                                    />
                                </Col>
                           </Row>
                           <Row className="form-group">
                                <Label htmlFor="comments" md={4}>Comments</Label>
                                <Col md={12}> 
                                <Control.textarea model=".comments" id="comments" name="comments" rows="6" 
                                className="form-control" />       
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="Submit" color="primary">SUBMIT</Button>
                                </Col>
                            </Row>
                       </LocalForm>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;