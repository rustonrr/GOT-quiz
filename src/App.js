import React, { Component } from 'react';
import { connect } from "react-redux";
import { onUserNameChange } from "./redux/reducers";
import { Link } from "react-router-dom";

import ResultsPage from "./ResultsPage";

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>Begin</h2>
        </div>
        <input placeholder="Enter Name" value={this.props.text} onChange={this.props.onTextChange} />
        <button onClick={this.props.onGoButtonClick} disabled={!this.props.text}>
          <Link to={"/quiz"}>Go</Link>
        </button>
              <div className="test">
                THIS IS WORKING: {this.props.text}
              </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    text: state.userName
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onTextChange: (event) => {dispatch(onUserNameChange(event.target.value))},
    onGoButtonClick: () => {} //dont have to use dispatch
  }
}
//create react app another app
//delete src folder immediately
//replace with good src folder
//copy all code that makes sense to copy over index, app, store, css
//dont use state
//dont use state
//dont forget you're using browserrouter

export default connect(mapStateToProps, mapDispatchToProps)(App);


//classname for pointer-events: none
//inside link, a situational class
//based on this.state.disabled
