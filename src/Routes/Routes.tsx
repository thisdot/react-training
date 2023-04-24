import { Route, Routes } from 'react-router-dom';
// import Home from '../Pages/Home';
import User from '../Pages/User';
import Users from '../Pages/Users';

export const AppRoutes = () => (
  <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    <Route path="users" element={<Users />} />
    <Route path="users/:userId" element={<User />} />
  </Routes>
);
