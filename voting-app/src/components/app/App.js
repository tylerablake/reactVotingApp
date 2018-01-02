import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from '../../actions/index';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }

  render(){
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center', 'padding':'0'}}>         
          <h2>What is your favorite front-end development framework?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-md-4">
              <img src="angular-logo.png" height="110" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>
            <div className="col-md-4">
              <img src="react-logo.png" height="85" alt="React" onClick={this.handleVoteReact}></img>
            </div>
            <div className="col-md-4">
              <img src="vuejs-logo.png" height="70" alt="Vue.js" onClick={this.handleVoteVuejs}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
