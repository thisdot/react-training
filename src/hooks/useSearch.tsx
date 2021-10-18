import { useEffect, useState } from "react";
import { SearchResult, SearchResults } from "../types/github";

const useSearch = () => {
  const [username, setUsername] = useState('');
  const [isProfilesLoading, setIsProfilesLoading] = useState(false);
  const [profiles, setProfiles] = useState<Array<SearchResult> | null>(null);
  const [isError, setIsError] = useState<boolean | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      console.log(`Searching GitHub for ${username}`);
      
      const response = await fetch(`https://api.github.com/search/users?q=${username}`);
      
      if (response.ok) {
        const data: SearchResults = await response.json();
        
        // add a fake delay to see loading state
        await new Promise(resolve => setTimeout(resolve, 1000));

        setProfiles(data.items);              
      } else {
        setIsError(true);
      }

      setIsProfilesLoading(false);
    }

    if (username && username.length) {
      setIsError(false);
      setIsProfilesLoading(true);
      fetchProfile();
    }
  }, [username]);

  return { isProfilesLoading, profiles, isError, username, setUsername };
};

export default useSearch;