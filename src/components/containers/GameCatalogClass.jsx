import React, { Component } from 'react';
import GameList from '../games/GameList';
import { getGames } from '../services/gameApi';

export default class GameCatalogClass extends Component {
  state = {
    loading: true,
    games: [],
  };

  async componentDidMount() {
    const games = await getGames();
    this.setState({ games, loading: false });
  }
  render() {
    const { loading, games } = this.state;
    if (loading) return <h1>Loading...</h1>;

    return <GameList games={games} />;
  }
}
