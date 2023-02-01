// custom hook

import { useEffect, useState } from 'react';
import { SearchResult } from '../types/github';
import { IProfile } from '../types/users';

const useSearch = () => {
  const [isProfilesLoading, setIsProfilesLoading] = useState(false);
  const [profiles, setProfiles] = useState<Array<IProfile> | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(`https://api.github.com/search/users?q=react`);
      if (response.ok) {
        const data = await response.json();
        setProfiles(
          data.items.map(
            (item: SearchResult) =>
              ({
                username: item.login,
                name: 'Anonymous',
                bio: "Search results don't actually have bio's. We can implement these later when we're fetching the full profile.",
                avatarUrl: item.avatar_url,
                profileUrl: item.url,
              } as IProfile),
          ),
        );
      }
      setIsProfilesLoading(false);
    }

    setIsProfilesLoading(true);
    fetchUsers();
  }, []);

  return { profiles, isProfilesLoading };
};

export default useSearch;
