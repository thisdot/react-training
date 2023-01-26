import { IProfile } from '../types/users';

type Props = {
  profile: IProfile;
};

const UserProfile = ({ profile }: Props) => {
  return (
    <article>
      <h3>{profile.username}</h3>
    </article>
  );
};

export default UserProfile;
