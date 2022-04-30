import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: props.selectedDish
        };
        //console.log(this.state);
    }

    renderDish(dish) {

        let dishElement = dish != null ?
            (<div className='xs-12 sm-12 md-5 m-1'>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>)
            :
            (<div></div>);

        return dishElement;
    }

    renderComments(comments) {
        let commentsElement = comments != null ?
            (
                <div className='xs-12 sm-12 md-5 m-1'>
                    <h4>Comments</h4>
                    <Media list>
                        {comments.map(comment => {
                            return (
                                <div key={comment.id}>
                                    <div>{comment.name}</div>
                                    <div>--{comment.author}, {comment.date}</div>
                                </div>
                            )
                        })}
                    </Media>
                </div>
            )
            :
            (<div></div>);

        return commentsElement;
    }

    render() {

        let page = (
            <div className='row'>
                {this.renderDish(this.props.selectedDish)}
                {this.renderComments(this.props.selectedDish.comments)}
            </div>
        );
        return page;
    }
}

export default DishDetail;