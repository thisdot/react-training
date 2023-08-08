import { useState } from 'react';
import { IProfile } from '../../types/users';

type Props = {
  profile: IProfile;
};

const ProfileBio = ({ profile }: Props) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  if (!profile.bio) {
    return <p>No bio</p>;
  }

  return (
    <div>
      <p>{isShowMore ? profile.bio : `${profile.bio.slice(0, 20)}...`}</p>

      {isShowMore ? (
        <button onClick={() => setIsShowMore(false)}>Read less</button>
      ) : (
        <button onClick={() => setIsShowMore(true)}>Read more</button>
      )}
    </div>
  );
};

export default ProfileBio;
