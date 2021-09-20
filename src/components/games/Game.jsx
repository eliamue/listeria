import React from 'react';
import { PropTypes } from 'prop-types';

const Game = ({ name, image, platform, genre, url }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <h1>{name}</h1>
      <p>{genre}</p>
      <p>{platform}</p>
      <a href={url} target="_blank" rel="noreferrer">
        Learn More
      </a>
    </figcaption>
  </figure>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Game;
