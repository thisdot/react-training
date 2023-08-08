import Search from '../components/Search/Search';
import Profiles from '../components/Profiles';
import { useState } from 'react';

const Users = () => {
  const [query, setQuery] = useState('react');

  return (
    <>
      <Search onSearch={setQuery} />
      <h2>Profiles</h2>
      <Profiles query={query} />
    </>
  );
};

export default Users;
