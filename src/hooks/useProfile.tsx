import { useEffect, useState } from "react";
import { Profile } from "../types/github";

const useProfile = (searchUsername: string | null) => {
  const [username, setUsername] = useState(searchUsername);
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isError, setIsError] = useState<boolean | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      console.log(`Fetching profile for ${username}`);
      
      const response = await fetch(`https://api.github.com/users/${username}`);
      
      if (response.ok) {
        const data: Profile = await response.json();
        
        // add a fake delay to see loading state
        await new Promise(resolve => setTimeout(resolve, 1000));

        setProfile(data);              
      } else {
        setIsError(true);
      }

      setIsProfileLoading(false);
    }

    if (username && username.length) {
      setIsError(false);
      setIsProfileLoading(true);
      fetchProfile();
    }
  }, [username]);

  return { isProfileLoading, profile, isError, setUsername };
};

export default useProfile;