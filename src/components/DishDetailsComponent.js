import React from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle,
    Breadcrumb,BreadcrumbItem,Button,Modal,ModalHeader,ModalBody,Label,Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import {Control,LocalForm,Errors} from "react-redux-form"
import {Loading} from "./LoadingComponent"

const required=(val)=>val && val.length;
const maxLength=(len)=>(val)=>!(val) ||(val.length<=len);
const minLength=(len)=>(val)=>(val) &&(val.length>=len);
    const DishDetails=(props)=>{
        if(props.isLoading)
        {
            return (
                <div className="container">
                    <div className="row">
                     <Loading/>  
                    </div>
                </div>               
            );
        }
        else if(props.errMess)
        {
            return (
                <div className="container">
                    <div className="row">
                     <h4>{props.errMess}</h4> 
                    </div>
                </div>               
            );
        }
        else if(props.dish==null)
        {
            return(
                <div></div>
            );
        }
        else
        {
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">MENU</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                        </div>
                    </div>
                <div className='row'>
                     <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
                    </div>
                </div>
           </div>
        );
        }
    }
    function RenderDish({dish})
    {
        return (
        <Card>
            <CardImg width='100%' src={dish.image} alt={dish.name} />
            <CardBody>
            <CardTitle><h4>{dish.name}</h4></CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        );
    }
    function RenderComments({comments,addComment,dishId})
    {
        const months = [
            'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov',
            'Dec'
          ]
        var com=comments.map((c)=>{
            var d=new Date(c.date);
            var toDisplay=months[d.getMonth()]+' '+d.getDate()+','+d.getFullYear();
            return(
            <li key={c.id}>{c.comment}<br/><br/> 
            --{c.author}, {toDisplay}<br/></li>
            )
        })
        return (
            <div>
        <h4>Comments</h4>
        <ul className='list-unstyled'>
            {com}
            </ul>
            <CommentForm  addComment={addComment} dishId={dishId} />
        </div>
        );
    }
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
        this.props.addComment(this.props.dishId,values.rating,values.author,values.comments);
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

    
export default DishDetails;