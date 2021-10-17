import { SearchResult } from "../types/github";
import UserProfile from "./UserProfile";

type Props = {
  profiles: Array<SearchResult>;
}

const UserProfiles = ({ profiles }: Props) => {
  if (!profiles.length) {
    return (
      <p>No users found.</p>
    );
  }

  return (
    <div>
      {profiles.map(profile => {
        return (
          <div>
            <UserProfile profile={profile} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default UserProfiles;