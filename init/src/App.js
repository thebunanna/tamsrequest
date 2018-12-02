import React, { Component } from 'react';
import RQBoard from './RQBoard';
import {BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data';
import CreateReq from './CreateReq'
import {Button} from 'react-materialize';
class App extends Component {  
  logout() {
    Meteor.logout((err) => {
      if (err) alert(err);
    })
  }

  login()
    {
        Meteor.loginWithFacebook((err) => {
            if(err) alert(err);
        });
    }

  render() {
    return (
      <BrowserRouter>
      <div>
        {Meteor.userId() ? <Button onClick = {this.logout.bind(this)}>Logout</Button> : <Button onClick = {this.login.bind(this)}>Login</Button>}
        <Switch>
          <Route exact path = '/' component = {RQBoard}/>
          <Route path = '/create' component = {CreateReq}/>
        </Switch>
      </div>      
      </BrowserRouter>
    )
    
    
  }
}
  
export default withTracker(() => {
  const subsription = Meteor.subscribe('Users');  
  return {
      isReady: subsription.ready(),
      currUser: 1,
  };
})(App);
  