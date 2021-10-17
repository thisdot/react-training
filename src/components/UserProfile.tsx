import { Link } from "react-router-dom";
import { SearchResult } from "../types/github";

type Props = {
  profile: SearchResult;
}

const UserProfile = ({ profile }: Props) => {
  return (
    <div>
      <h1>{profile.login}</h1>
      {profile.avatar_url && 
        <p>
          <img src={profile.avatar_url} alt={`${profile.login}`} style={{width:'3rem', height:'3rem'}} />
        </p>
      }
      <p>
        <Link to={`/users/${profile.login}`}>View Profile</Link>
      </p>
    </div>
  );
}

export default UserProfile;