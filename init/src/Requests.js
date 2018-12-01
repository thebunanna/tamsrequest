import React, { Component } from 'react';


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
            <div className='box'>
                <div>
                    {this.props.type}
                </div>
                <div>
                    {this.props.pic}
                </div>
                <div>
                    {this.props.reward}
                </div>                
            </div>
        )
    }
}
export default Requests;