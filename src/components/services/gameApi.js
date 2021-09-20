export const getGames = async () => {
  try {
    const res = await fetch(
      'https://cors.bridged.cc/https://www.mmobomb.com/api1/games'
    );

    const games = await res.json();

    return games.map((game) => ({
      id: game.id,
      name: game.title,
      image: game.thumbnail,
      platform: game.platform,
      genre: game.genre,
      url: game.game_url,
    }));
  } catch (error) {
    console.error(`Error getting games: ${error.message}`);
  }
};
