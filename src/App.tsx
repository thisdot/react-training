import UserProfiles from './components/UserProfiles';
import useSearch from './hooks/useSearch';
import Search from './components/Search/Search';

const App = () => {
  const { profiles, isProfilesLoading } = useSearch();
  if (isProfilesLoading || !profiles) {
    return <p>Loading ...</p>;
  }
  return (
    <>
      <Search />
      <UserProfiles profiles={profiles} />
    </>
  );
};

export default App;
