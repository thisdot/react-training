import Search from "../components/Search/Search";
import UserProfiles from "../components/UserProfiles";
import { useApp } from "../contexts/appContext";
import useSearch from "../hooks/useSearch";

const Users = () => {
  const { profiles, isProfilesLoading, setUsername } = useSearch();
  const { searchTerm, setSearchTerm } = useApp();

  const onSearch = (search: string) => {
    // trigger a fetch to the GitHub API
    setUsername(search);
    // save last search term in context
    setSearchTerm(search);
  };

  return (
    <main>
      <h1>GitHub User Search</h1>
      <section>
        <Search onSearch={onSearch} />
        {searchTerm && 
          <p>Last search was <strong>{searchTerm}</strong></p>
        }
      </section>
      <section>
        {isProfilesLoading &&
          <p>Searching...</p>
        }
        {!isProfilesLoading && profiles && 
          <UserProfiles profiles={profiles} />
        }
      </section>
    </main>
  );
}

export default Users;
