import React from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle,
    Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

    const DishDetails=(props)=>{
        if(props.dish==null)
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
                        <RenderComments comments={props.comments}/>
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
    function RenderComments({comments})
    {
        const months = [
            'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov',
            'Dec'
          ]
        var com=comments.map((c)=>{
            var d=new Date(c.date);
            var toDisplay=months[d.getMonth()]+' '+d.getDate()+','+d.getFullYear();
            return(
            <li key={c.id}>{c.comment}<br/><br/> --{c.author}, {toDisplay}<br/></li>
            )
        })
        return (
            <div>
        <h4>Comments</h4>
        <ul className='list-unstyled'>
            {com}
            </ul>
        </div>
        );
    }
    
export default DishDetails;