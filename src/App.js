import React, { Component } from 'react'
import './App.scss';
// Need to install node-sass to use stylesheet
import CardComponent from './CardComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardComponent />
      </div>
    );
  }
}

export default App;
