import { useLocation } from "react-router-dom";

type RouteState = {
  fromDashboard: boolean;
};

export const Users = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const sortBy = searchParams.get('sort');
  const state: RouteState = useLocation().state as RouteState;  
  
  return (
    <div>
      <h1>Users</h1>
      {sortBy && 
        <p>Sort by: {sortBy}</p>
      }
      {state?.fromDashboard && 
        <p>From Dashboard</p>
      }
    </div>
  );
}
