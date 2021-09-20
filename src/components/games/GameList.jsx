import React from "react";
import PropTypes from 'prop-types';

const GameList = () => ();

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
