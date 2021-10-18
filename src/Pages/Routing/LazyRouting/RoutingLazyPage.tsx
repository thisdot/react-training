import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { Loading } from "../../../Components/ComponentLazyLoading/Loading";

const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));
const Topics = lazy(() => import('./Topics'));

function RoutingLazyPage () {
  return (
    <Router>
      <div>
        <h1>Lazy Routing</h1>
        <ul>
          <li><Link to='/routing/lazy/dashboard'>Dashboard</Link></li>
          <li><Link to='/routing/lazy/profile'>Profile</Link></li>
          <li><Link to='/routing/lazy/topics'>Topics</Link></li>          
        </ul>

        <hr />

        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path='/routing/lazy/dashboard' component={Dashboard} />
            <Route path='/routing/lazy/profile' component={Profile} />
            <Route path='/routing/lazy/topics' component={Topics} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default RoutingLazyPage;