import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    renderComments(commentList) {
        if (commentList!=null) {
            return(
                <div>
                    <h4 className="font-weight-bold m-2 mt-3 mb-3"> Comments </h4>
                    <ul className="list-unstyled ">
                        {commentList}
                    </ul>
                </div>
            )
        } 
        else {
            return(
                <div></div>
            )
        }
    }

    render() {

        const commentList = this.props.parentData.comments.map((comm) => {
            const commInfo = '-- ' + comm.author + ', ' + comm.date;
            return(
                <div key={comm.id}>
                    <p className="m-3"> {comm.comment} </p>
                    <p className="m-3"> {commInfo} </p>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                        <CardImg width="100%" src={this.props.parentData.image} alt={this.props.parentData.name}/>
                        <CardBody>
                            <CardTitle>{this.props.parentData.name}</CardTitle>
                            <CardText>{this.props.parentData.description}</CardText>
                        </CardBody>
                        </Card> 
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(commentList)} 
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail;