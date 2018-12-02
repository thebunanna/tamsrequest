import React, { Component } from 'react';
import {Modal, Button, Row, Col} from 'react-materialize'

class Requests extends Component {
    constructor (props) {
        super(props);
        this.state = {modal:false};
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState((state, props)=> {
            return {modal:!state.modal}
        })        
    }
    onHover() {
        return;
    }
    render() { 
        return (
            <Modal trigger={
                <div>
                    <div>
                        {this.props.type}
                    </div>                
                    <div>
                        Reward:
                        {this.props.reward}
                    </div>                
                </div>
            }
            fixedFooter
            header={this.props.name}>
            {this.props.desc}
            
            </Modal>
            
        )
    }
}
export default Requests;