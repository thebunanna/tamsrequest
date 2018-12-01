import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import Requests from './Requests';
import RequestData from './api/RequestData';
import {Row, Col, ProgressBar} from 'react-materialize';
class RequestBoard extends Component {
    render() {
        if (!this.props.isReady) {
            return (
            <Row>                
                <Col s={12}>
                  <ProgressBar />
                </Col>
            </Row>)
        }
        else {
            return (
                <div className='container flexiboard' >
                    <Requests type='search' pic='none' reward='100 rupes' />
                </div>
            )
        }
        
        
    }
}

export default withTracker(()=> {
    const subscription = Meteor.subscribe('req');
    return {
        isReady : subscription.ready(),
        allReq : RequestData.find({}).fetch()
    }
})(RequestBoard);
