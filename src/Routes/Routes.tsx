import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

export const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
  </Switch>
);
