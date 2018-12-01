import React, { Component } from 'react';
import {Button, Col, Row} from 'react-materialize';

class ActionPanel extends Component {
    render() {
        return (
            <Row>
                <Col s={12} m={6}>
                    <Button className='butto'>Create Request</Button>
                </Col>
                <Col s={12}m={6}>
                    <Button className='butto'>Manage Request</Button>
                </Col>
            </Row>
        );        
    }
}
export default ActionPanel;