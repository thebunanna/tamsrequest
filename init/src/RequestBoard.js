import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import Requests from './Requests';
import {RequestData} from './api/RequestData';
import {Row, Col, ProgressBar} from 'react-materialize';
class RequestBoard extends Component {
    render() {

        let reqs = this.props.allReq.map((val, index) => {            
            console.log(val[0])
            let {name, description, picture, reward, rewardp, type} = val[0];            
            return <Requests type={type} 
                        reward={[reward, rewardp]} 
                        key={index}
                        desc={description}
                        name={name}/>
        })         
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
                    {reqs}
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
