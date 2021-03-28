import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../redux/actions/gamesActions/actions';
import { Game } from '../../components';
import { GameList, Games } from './Home.styled';

const Home = ({ ...props }) => {
  // State and variables
  const dispatch = useDispatch();
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  // Effects
  useEffect(() => {
    dispatch(fetchGames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GameList {...props}>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game key={game.id} gameInfo={game} />
        ))}
      </Games>
    </GameList>
  );
};

export default Home;
