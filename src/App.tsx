import UserProfiles from './components/UserProfiles';
import useSearch from './hooks/useSearch';
import Search from './components/Search/Search';
import { useState } from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const { profiles, isProfilesLoading } = useSearch(query);
  const handleSearch = setQuery;

  if (isProfilesLoading || !profiles) {
    return <p>Loading ...</p>;
  }
  return (
    <>
      <Search onSearch={handleSearch} />
      <UserProfiles profiles={profiles} />
    </>
  );
};

export default App;
