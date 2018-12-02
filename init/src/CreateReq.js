import React, {Component} from 'react';
import {Input, Row, Button, option} from 'react-materialize';
import {NavLink} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'

class CreateReq extends Component {
    constructor (props) {
        super(props);
        this.state = {name:'',description:'', picture:'', reward:''};
        this.handleReturn = this.handleReturn.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeReward = this.onChangeReward.bind(this);
        this.onChangeRewardP = this.onChangeRewardP.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
    }

    handleReturn() {
        window.location = '/'
    }
    handleSubmit() {
        Meteor.call('req.make', this.state);
        window.location = '/'
    }

    onChangeName(e) {
        this.setState({name:e.target.value})
    }
    onChangeDesc(e) {
        this.setState({description:e.target.value})
    }
    onChangeRewardP(e) {
        this.setState({rewardp:e.target.value})
    }
    onChangeReward(e) {
        this.setState({reward:e.target.value})
    }
    onChangeType(e) {
        this.setState({type:e.target.value})
    }
    onChange
    render() {
        return (
            <div className='container create'>
                <div style={{height: '80%', width: '80%', margin:'auto', transform: 'translateY(10%)'}}>
                    <div style={{textAlign:'center'}}>Create Request Form</div>
                    <Row>                    
                        <Input onChange={this.onChangeName} s={12} m={6} label='Request Name'></Input>
                        <Input type='select' 
                            onChange={this.onChangeType} 
                            s={12} m={6} 
                            defaultValue='Search'
                            label='Request Type'>
                            <option value='Search'>Search</option>
                            <option value='Exchange'>Exchange</option>
                            <option value='Help'>Help</option>
                        </Input>
                        <Input type='number' onChange={this.onChangeRewardP} s={12} m={6} label='Reward (points)'></Input>
                        <Input onChange={this.onChangeRewardO} s={12} m={6} label='Reward (others)'></Input>
                        <Input onChange={this.onChangeDesc} s={12} type='textarea' />
                    </Row>
                    <Button onClick={this.handleSubmit} className='butto'>
                        Submit
                    </Button>
                    <div></div>
                    <br/>
                    <Button onClick={this.handleReturn} className='butto'>
                        Cancel
                    </Button>
                    
                </div>                
            </div>
        )
        
    }
}

export default CreateReq;