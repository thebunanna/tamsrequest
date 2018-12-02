import React, {Component} from 'react'
import RequestBoard from './RequestBoard'
import ActionPanel from './ActionPanel'
class RQBoard extends Component {
    render() {
        return (
            <div style={{height: '80vh'}}>
              <div style={{textAlign: 'center'}}>Requests</div>
              <RequestBoard/>
              <ActionPanel/>
            </div>
        );
    }
}

export default RQBoard;