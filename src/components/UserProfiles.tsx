import { IProfile } from '../types/users';
import UserProfile from './UserProfile';

type Props = {
  profiles: Array<IProfile>;
};

const UserProfiles = ({ profiles }: Props) => {
  return (
    <ul>
      {profiles.map((profile, index) => (
        <li key={profile.username}>
          <UserProfile profile={profile} />
        </li>
      ))}
    </ul>
  );
};

export default UserProfiles;
