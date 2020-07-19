import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'

    function RenderDish({dish,comments}) {
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
                        <RenderComments comments={comments}/>
                    </div>
                    </div>
                </React.Fragment>
            )
        }
        else {
            return (<div></div>)
        }
    }

    function RenderComments({comments}) {
        if (comments != null) {
            const com = comments.map(co => {
                return (
                    <React.Fragment>
                        <li>{co.comment}</li><br />
                        <li>-- {co.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(co.date)))}</li><br />
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

    const Dishdetail = (props) => {
        const { dish } = props.dish;
        const {comments} = props.comments;
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div class="row">
                    <RenderDish dish={props.dish} comments={props.comments}/>
                </div>     
            </div>
        );
    }

export default Dishdetail;