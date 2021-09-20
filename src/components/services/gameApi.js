export const getGames = async () => {
  const res = await fetch('https://www.mmobomb.com/api1/games');

  const games = await res.json();

  return games.map((game) => ({
    id: game.id,
    name: game.title,
    image: game.thumbnail,
    platform: game.platform,
    genre: game.genre,
    url: game.game_url,
  }));
};
