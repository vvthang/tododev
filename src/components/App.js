import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../csss/App.css';
import '../csss/index.css';
import Main from './Main';

class App extends Component {
  render() {
    return (

    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
      <h1 className="todo-title">Todos</h1>
      <Main />
    </div>

    );
  }
}

export default App;
