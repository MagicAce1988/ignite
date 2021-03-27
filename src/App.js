import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGames } from './redux/actions/gamesActions/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, []);
  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
