import { useParams } from "react-router";
import { useState } from "react";
import useProfile from "../hooks/useProfile";

const User = () => {  
  const { username } = useParams<{ username: string; }>();
  const { profile, isProfileLoading, isError } = useProfile(username);
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <main>
      {isProfileLoading &&
        <p>Loading profile...</p>
      }
      {!isProfileLoading && profile && 
        <div>
          <h1>{profile.login}</h1>
          {profile.name &&
            <p>{profile.name}</p>
          }
          <p>{profile.followers} followers</p>
          <p>{profile.following} following</p>
          {profile.avatar_url && 
            <p>
              <img src={profile.avatar_url} alt={`${profile.name}`} />
            </p>
          }
          {profile.url && 
            <p>
              <a href={profile.url} target='_blank' rel='noreferrer'>View {profile.login} on GitHub</a>
            </p>
          }
          {profile.bio && 
            <div>
              <p>
                {isShowMore ? profile.bio : `${profile.bio.substr(0, 20).trim()}...`}
              </p>
              {isShowMore ? (
                <button onClick={() => setIsShowMore(false)}>Read less</button>
              ) : (
                <button onClick={() => setIsShowMore(true)}>Read more</button>
              )}
            </div>
          }
        </div>
      }
      {!isProfileLoading && isError && 
        <p>An error occured.</p>
      }
    </main>
  );
}

export default User;
