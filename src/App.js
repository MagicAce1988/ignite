import { Route } from 'react-router';
import GlobalStyles from './GlobalStyles.styled';
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
