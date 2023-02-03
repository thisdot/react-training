import Search from '../components/Search/Search';
import useSearch from '../hooks/useSearch';
import UserProfiles from '../components/UserProfiles';

const Users = () => {
  const { profiles, isProfilesLoading } = useSearch();

  const onSearch = (term: string) => {
    console.log(term);
  };

  return (
    <>
      <Search onSearch={onSearch} />
      <h2>Profiles</h2>
      {isProfilesLoading && <p>Loading...</p>}
      {!isProfilesLoading && profiles && <UserProfiles profiles={profiles} />}
    </>
  );
};

export default Users;
