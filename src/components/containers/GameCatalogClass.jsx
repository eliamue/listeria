import React, { Component } from 'react';
import GameList from '../games/GameList';
import { getGames } from '../services/gameApi';
import Search from '../games/Search';

export default class GameCatalogClass extends Component {
  state = {
    loading: true,
    games: [],
    filteredGames: [],
    searchTerm: '',
  };

  async componentDidMount() {
    const games = await getGames();
    this.setState({ games, loading: false });
  }

  handleSearch = ({ target }) => {
    this.setState({ searchTerm: target.value }, () => {
      const { games, searchTerm } = this.state;

      const filteredGames = games.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.setState({ filteredGames });
    });
  };

  render() {
    const { loading, games, filteredGames, searchTerm } = this.state;

    if (loading) return <h1>Loading...</h1>;

    return (
      <>
        <Search searchTerm={searchTerm} onSearch={this.handleSearch} />
        <GameList 
          games={games} 
          searchTerm={searchTerm} 
          filteredGames={filteredGames} />
      </>
    );
  }
}
