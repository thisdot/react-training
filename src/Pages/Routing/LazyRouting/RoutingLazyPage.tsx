import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Loading } from "../../../Components/ComponentLazyLoading/Loading";

const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));
const Topics = lazy(() => import('./Topics'));

function RoutingLazyPage () {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Dashboard</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/topics'>Topics</Link></li>          
        </ul>

        <hr />

        <Suspense fallback={<Loading />}>
          <Route exact path='/' component={Dashboard} />
          <Route path='/profile' component={Profile} />
          <Route path='/topics' component={Topics} />
        </Suspense>
      </div>
    </Router>
  )
}

export default RoutingLazyPage;