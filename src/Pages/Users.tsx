import Search from "../components/Search/Search";
import useSearch from "../hooks/useSearch";

const Users = () => {
  const { profiles, isProfilesLoading } = useSearch();  

  const onSearch = (term: string) => {
    console.log(term);
  };

  return (
    <>
      <Search onSearch={onSearch} />
      <h1>Profiles</h1>
      {isProfilesLoading && 
        <p>Loading...</p>
      }
      {!isProfilesLoading && 
        <p>{profiles?.length}</p>
      }
    </>
  );
};

export default Users;
