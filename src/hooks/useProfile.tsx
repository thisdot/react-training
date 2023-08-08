import { useEffect, useState } from 'react';

const useProfile = (userId?: string) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    (async () => {
      if (!userId) {
        return;
      }
      try {
        const result = await fetch('https://api.github.com/users/' + userId);
        if (!result.ok) {
          throw new Error('result is not OK!');
        }
        const item: Record<string, string> = await result.json();
        const profile = {
          username: item.login,
          isLoggedIn: false,
          name: 'Unknown',
          avatarUrl: item.avatar_url,
          profileUrl: item.url,
          bio: item.bio,
        };
        setData(profile);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [userId]);
  return { data, isLoading, isError };
};

export default useProfile;
