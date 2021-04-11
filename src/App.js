import { Route } from 'react-router';
import { Nav } from './components';
import GlobalStyles from './GlobalStyles.styled';
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
