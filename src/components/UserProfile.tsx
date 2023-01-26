import { IProfile } from '../types/users';

type Props = {
  profile: IProfile;
};

const UserProfile = ({ profile }: Props) => {
  const { username, name, avatarUrl, profileUrl, bio } = profile;

  return (
    <article>
      <h3>{username}</h3>
      <p>{name}</p>
      {avatarUrl && <img src={avatarUrl} alt={username} />}
      {profileUrl && <a href={profileUrl}>GitHub Profile</a>}
      <p>{bio}</p>
    </article>
  );
};

export default UserProfile;
