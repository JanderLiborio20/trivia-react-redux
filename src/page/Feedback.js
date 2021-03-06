import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import Header from './components/Header';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      assertions: JSON.parse(localStorage.getItem('state')).player.assertions,
    };
    this.seeRanking = this.seeRanking.bind(this);
    this.performanceAnswer = this.performanceAnswer.bind(this);
  }

  seeRanking() {
    const getLocalStorage = JSON.parse(localStorage.getItem('state'));
    const { gravatarEmail, name, score } = getLocalStorage.player;
    const hashGenerator = md5(gravatarEmail).toString();
    const gravatar = `https://www.gravatar.com/avatar/${hashGenerator}`;
    const ranking = {
      name,
      score,
      picture: gravatar,
    };
    localStorage.setItem('ranking',
      JSON.stringify(localStorage.getItem('ranking') === null
        ? [ranking] : [...JSON.parse(localStorage.getItem('ranking')), ranking]));
  }

  performanceAnswer() {
    const getLocalStorage = JSON.parse(localStorage.getItem('state'));
    const controlScore = 3;
    if (getLocalStorage.player.assertions >= controlScore) {
      return (
        <>
          <p data-testid="feedback-text">Mandou bem!</p>
          <p data-testid="feedback-total-score">{getLocalStorage.player.score}</p>
        </>
      );
    }
    return (
      <>
        <p data-testid="feedback-text">Podia ser melhor...</p>
        <p data-testid="feedback-total-score">{getLocalStorage.player.score}</p>
      </>
    );
  }

  render() {
    const { assertions } = this.state;
    return (
      <>
        <header>
          <Header />
          <div>
            { this.performanceAnswer() }
            <p data-testid="feedback-total-question">
              {assertions}
            </p>

          </div>
        </header>

        <div>
          <Link to="/">
            <button type="button" data-testid="btn-play-again">Jogar novamente</button>
          </Link>
          <Link to="/ranking">
            <button
              type="button"
              onClick={ this.seeRanking }
              data-testid="btn-ranking"
            >
              Ver Ranking
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default Feedback;
