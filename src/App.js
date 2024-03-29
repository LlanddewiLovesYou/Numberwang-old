import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './css/board.css'
import './css/modal.css'
import './css/presenter.css'
import Board from './components/board';
import Presenter from './components/presenter';
import ContestantComp from './components/contestant-component';
import Logo from './assets/numberwanglogo.png';
import Modal from './components/modal';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {numberwang: false}
  }

  render() {
    return (
      <div className="App">
        {this.state.numberwang ? <Modal/> : ''}
        <img className='logo' src={Logo} />
        <Board/>
        <div className='presenter'>
          <Presenter/>
        </div>
        <ContestantComp/>
        <p className="App-intro">
          Go home Javascript, you're drunk!
        </p>
      </div>
    );
  }
}

export default App;



// <header className="App-header">
// </header>
