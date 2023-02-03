import { useState } from 'react';
import { IProfile } from '../types/users';

type Props = {
  profile: IProfile;
};

const UserProfile = ({ profile }: Props) => {
  const { username, name, avatarUrl, profileUrl, bio } = profile;

  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  return (
    <div>
      <h3>{username}</h3>
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
