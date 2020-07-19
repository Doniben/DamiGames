import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Intro.css';
import logo from '../assets/Logo.svg';

class Intro extends Component {
  render() {
    return (
      <header className="center intro-component">
        <img src={logo} className="App-logo" alt="The Zen Zone" />
        <div className="zen-zone-intro">
          <h1>Dami, vamos a jugar un poco.</h1>
          
          <p>Medita, calma las molestias con el poder de juegos pequeños, cautivadores, medianamente divertidos y extrañamente satisfactorios</p>
          
          <Link to="/games">
            <button>¡Empecemos!</button>
          </Link>
        </div>
      </header>
    );
  }
}

export default Intro;
