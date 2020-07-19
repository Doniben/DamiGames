import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SelectGame extends Component {
  render() {
    return (
      <section className="center vertical">
        <h1 className="section-select">Selecciona tu juego, Dami.</h1>
        <div className="section-options">
          <Link to="swirl"><button>Sic Mundus</button></Link>
          <Link to="switch"><button>Reactivación</button></Link>
          <Link to="break"><button>Destruye</button></Link>
        </div>
      </section>
    );
  }
}

export default SelectGame;
