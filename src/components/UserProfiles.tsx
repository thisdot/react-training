import { IProfile } from "../types/users";
import UserProfile from "./UserProfile";

type Props = {
  profiles: Array<IProfile>;
};

const UserProfiles = ({ profiles }: Props) => {
  return (
    <>
      {profiles.map((profile, index) => {
        return (
          <div key={index}>
            <UserProfile profile={profile} />
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default UserProfiles;