import { IProfile } from '../types/users';
import ProfileBio from './Profile/ProfileBio';

type Props = {
  profile: IProfile;
};

const UserProfile = ({ profile }: Props) => {
  const { username, name, avatarUrl, profileUrl } = profile;

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
      <ProfileBio profile={profile} />
    </div>
  );
};

export default UserProfile;
