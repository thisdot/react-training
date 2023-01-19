import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import User from "../Pages/User";

export const Routes = () => (
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/user/:userId" component={User}/>
    </Switch>
);
