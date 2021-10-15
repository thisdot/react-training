import { Link, Switch, Route, useParams, useRouteMatch } from "react-router-dom";

export const Categories = () => {
  // Use `path` to build <Route> paths relative to the parent route
  // Use `url` to build relative links
  let { path, url } = useRouteMatch();
  
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to={`${url}/react`}>React</Link>
        </li>
        <li>
          <Link to={`${url}/angular`}>Angular</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a category.</h3>
        </Route>
        <Route path={`${path}/:categoryId`} component={Category} />          
      </Switch>
    </div>
  );
}

export const Category = () => {
  // The <Route> for this component uses `/categories/:categoryId`
  // Get the `:categoryId` of the URL with `useParams()`
  const { categoryId } = useParams<{ categoryId: string; }>();

  return (
    <div>
      <h3>Category: {categoryId}</h3>
    </div>
  );
}
