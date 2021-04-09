import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../redux/actions/gamesActions/actions';
import { Game } from '../../components';
import { GameList, Games } from './Home.styled';
import GameDetail from '../../components/GameDetail/GameDetail';
import { useLocation } from 'react-router';

const Home = ({ ...props }) => {
  // State and variables
  const dispatch = useDispatch();
  const location = useLocation();
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  const pathId = location.pathname.split('/')[2];

  // Effects
  useEffect(() => {
    dispatch(fetchGames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GameList {...props}>
      {pathId && <GameDetail />}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game key={game.id} gameInfo={game} />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game key={game.id} gameInfo={game} />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game key={game.id} gameInfo={game} />
        ))}
      </Games>
    </GameList>
  );
};

export default Home;
