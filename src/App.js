import './styles/styles.scss';
import { Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <PublicRoute exact path="/" component={Home} heroActive />
      </Switch>
    </div>
  );
}

export default App;


const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Component {...matchProps} />
      )}
    />
  );
};