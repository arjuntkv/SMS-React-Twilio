import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SMSForm from './SMSForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SMSForm />
        </header>
      </div>
    );
  }
}

export default App;
