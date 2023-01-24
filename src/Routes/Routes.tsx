import {Route, Switch} from 'react-router-dom';
// import Home from '../pages/Home';
import User from "../Pages/User";
import Users from "../Pages/Users";

export const Routes = () => (
    <Switch>
        {/*<Route path="/" component={Home} exact/>*/}
        <Route path="/users" component={Users} />
        <Route path="/user/:userId" component={User}/>
    </Switch>
);
