import { useState } from 'react';
import { IProfile } from '../types/users';
import FavoriteButton from './FavoriteButton';

type Props = {
  profile: IProfile;
};

const UserProfile = ({ profile }: Props) => {
  const { isLoggedIn, username, name, avatarUrl, profileUrl, bio } = profile;
  // const greeting = isLoggedIn ? <p>You are logged in</p> : <p>You are not logged in</p>;
  // const signOutButton = <button>Sign out</button>;
  // const signInButton = <button>Sign in</button>;
  // const greeting2 = isLoggedIn ? <div>{signOutButton}</div>: <p>{signInButton}</p>;

  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  return (
    <div>
      {/*{greeting}*/}
      {/*{greeting2}*/}

      <h3>{username}</h3>
      <FavoriteButton id={username} />
      <p>{name}</p>
      {avatarUrl && (
        <p>
          <img src={avatarUrl} alt={username} />
        </p>
      )}
      {profileUrl && (
        <p>
          <a href={profileUrl}>GitHub Profile</a>
        </p>
      )}
      {bio && (
        <div>
          <p>{isShowMore ? profile.bio : `${bio.substr(0, 20)}...`}</p>

          {isShowMore ? (
            <button onClick={() => setIsShowMore(false)}>Read less</button>
          ) : (
            <button onClick={() => setIsShowMore(true)}>Read more</button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
