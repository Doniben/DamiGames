import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Intro.css';
import logo from '../assets/Logo.svg';

class Reflection extends Component {
  render() {

    let totalSeconds = this.props.totalTime / 1000;
    let totalMinutes = Math.floor(totalSeconds / 60);
    let remainingSeconds = Math.floor(totalSeconds % 60);

    return (
      <header className="center intro-component">
        <img src={logo} className="App-logo" alt="Dami Juega" />
        <div className="zen-zone-intro">
          <h1>Excelente, Dami :)</h1>
          <p>
            Hemos meditado durante <b>{totalMinutes}</b> minutos y <b>{remainingSeconds}</b> segundos.
          </p>
          <Link to="/games">
            <button>¿Vamos a jugar más?</button>
          </Link>
        </div>
      </header>
    );
  }
}

export default Reflection;
