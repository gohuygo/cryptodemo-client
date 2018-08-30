import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signInModalOpen: true
    }
  }

  closeSignupModal = () => {
    this.setState({signInModalOpen: false})
  }

  signIn = () => {
    fetch('http://localhost:8080/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        'Name': 'Huy',
      })
    })
    .then( results => results.json() )
    .then( data => console.log(data) )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Modal show={this.state.signInModalOpen} handleClose={this.closeSignupModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
      </div>
    );
  }
}

export default App
