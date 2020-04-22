import React from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap'

class DishDetails extends React.Component{

    render()
    {
        if(this.props.dish==null)
        {
            return(
                <div></div>
            );
        }
        else
        {
        return(
            <div className='row'>
                <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}

                </div>
           </div>
        );
        }
    }
    renderDish(dish)
    {
        return (
        <Card>
            <CardImg width='100%' src={this.props.dish.image} alt={this.props.dish.name} />
            <CardBody>
            <CardTitle><h4>{this.props.dish.name}</h4></CardTitle>
            <CardText>{this.props.dish.description}</CardText>
            </CardBody>
        </Card>
        );
    }
    renderComments(comments)
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

}

export default DishDetails;