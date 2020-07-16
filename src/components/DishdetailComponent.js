import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"

class Dishdetail extends Component {

    formatDate(date) {
        // const option = { year: 'numeric', month: 'short', day: 'numeric' };
        // const date1 = new Date(date)
        // const newdate = date1.toLocaleDateString("en-US", option)
        // return newdate;

        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(date)))
    }

    renderDish = (dish) => {
        if (dish != null) {
            return (
                <React.Fragment>
                    <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1" >
                        <h4 className="mt-3 mb-3">Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                    </div>
                </React.Fragment>
            )
        }
        else {
            return (<div></div>)
        }
    }

    renderComments = (comments) => {
        if (comments != null) {
            const com = comments.map(co => {
                return (
                    <React.Fragment>
                        <li>{co.comment}</li><br />
                        <li>-- {co.author}, {this.formatDate(co.date)}</li><br />
                    </React.Fragment>
                )
            }
            );
            return (
                <ul className="list-unstyled">
                    {com}
                </ul>
            )
        }
        else {
            return (<div></div>)
        }
    }

    render() {
        const { dish } = this.props;
        return (
            <div className="container">
                {this.renderDish(dish)}
            </div>
        );
    }
}

export default Dishdetail;