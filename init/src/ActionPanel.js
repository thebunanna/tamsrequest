import React, { Component } from 'react';
import {Button, Col, Row} from 'react-materialize';
import {NavLink} from 'react-router-dom';

class ActionPanel extends Component {
    constructor (props) {
        super (props);
    }

    onClick(e, val) {
        let a = '/' + val
        console.log(a)
        window.location = a
    }
    render() {
        return (
            <Row>
                <Col s={12} m={6}>
                    <Button onClick={() => {window.location = '/create'}}className='butto'>
                        Create Request
                    </Button>
                </Col>
                <Col s={12}m={6}>
                    <Button onClick={() => {window.location = '/manage'}}className='butto'>
                        Manage Request
                    </Button>
                </Col>
            </Row>
        );        
    }
}
export default ActionPanel;