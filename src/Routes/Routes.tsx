import { Route, Switch } from 'react-router-dom';
import User from '../pages/User';
import About from '../pages/About';
import Home from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import Users from '../pages/Users';
import Login from '../pages/Login';

export const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} exact />
    <Route path="/users" component={Users} exact />
    <Route path="/users/:username" component={User} exact />
    <Route path="/login" component={Login} exact />
    <Route path="*" component={NotFound} />
  </Switch>
);
