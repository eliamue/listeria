import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';

const GameList = ({ games }) => (
  <ul 
    aria-label="games" 
    style={{ 
      display: 'flex', 
      width: '90vw', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
    }}>
    {games.map((game) => (
      <li key={game.id}>
        <Game {...game} />
      </li>
    ))}
  </ul>
);

GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      platform: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GameList;
