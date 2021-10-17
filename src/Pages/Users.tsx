import Search from "../components/Search";
import UserProfiles from "../components/UserProfiles";
import useSearch from "../hooks/useSearch";

const Users = () => {
  const { profiles, isProfilesLoading, username, setUsername } = useSearch(null);

  const onSearch = (search: string) => {
    setUsername(search);
  };

  return (
    <main>
      <h1>GitHub User Search</h1>
      <section>
        <Search onSearch={onSearch} />
      </section>
      <section>
        {isProfilesLoading &&
          <p>Searching for "{username}"...</p>
        }
        {!isProfilesLoading && profiles && 
          <UserProfiles profiles={profiles} />
        }
      </section>
    </main>
  );
}

export default Users;
