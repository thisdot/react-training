// custom hook

import { useEffect, useState } from "react";
import { SearchResult } from "../types/github";

const useSearch = () => {
  const [isProfilesLoading, setIsProfilesLoading] = useState(false);
  const [profiles, setProfiles] = useState<Array<SearchResult> | null>(null);
  
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(`https://api.github.com/search/users?q=coryh`);
      if (response.ok) {        
        const data = await response.json();        
        setProfiles(data.items);
      }
      setIsProfilesLoading(false);
    }

    setIsProfilesLoading(true);
    fetchUsers();
  }, []);

  return { profiles, isProfilesLoading };
};

export default useSearch;