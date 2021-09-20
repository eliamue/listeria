import React, { Component } from 'react';
import GameList from '../games/GameList';
import { getGames } from '../services/gameApi';
import Search from '../games/Search';

export default class GameCatalogClass extends Component {
  state = {
    loading: true,
    games: [],
    searchTerm: '',
  };

  async componentDidMount() {
    const games = await getGames();
    this.setState({ games, loading: false });
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { loading, games, searchTerm } = this.state;

    if (loading) return <h1>Loading...</h1>;

    return (
      <>
        <Search searchTerm={searchTerm} onSearch={this.handleSearch} />
        <GameList games={games} />
      </>
    );
  }
}
