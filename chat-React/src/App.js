import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from './components/text';
import UserAdd from './components/userAdd';
import GetUsers from './components/getUsers';
import GetMessages from './components/getMessage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
		<UserAdd /> <p/>
		<TextBox from='bedirhan' /> <p/>
		<GetUsers/>
		<GetMessages/>
      </div>
    );
  }
}

export default App;
