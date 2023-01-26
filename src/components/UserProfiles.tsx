import { IProfile } from "../types/users";
import UserProfile from "./UserProfile";

type Props = {
  profiles: Array<IProfile>;
};

const UserProfiles = ({ profiles }: Props) => {
  return <UserProfile profile={profiles[0]} />;
};

export default UserProfiles;
