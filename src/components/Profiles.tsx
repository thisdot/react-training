import useSearch from '../hooks/useSearch';
import UserProfiles from './UserProfiles';

type Props = {
  query: string;
};

const Profiles = ({ query }: Props) => {
  const { profiles, isProfilesLoading } = useSearch(query);

  if (isProfilesLoading) {
    return <p>Loading...</p>;
  }
  if (!isProfilesLoading || !profiles) {
    return <p>Something went wrong</p>;
  }

  return <UserProfiles profiles={profiles} />;
};

export default Profiles;
