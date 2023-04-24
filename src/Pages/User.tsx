import UserProfile from '../components/UserProfile';
import useProfile from '../hooks/useProfile';
import { IProfile } from '../types/users';
import { useParams } from 'react-router-dom';

const isProfile = (profile: any): profile is IProfile =>
  Object.keys(profile).length === 0;

type UserParams = {
  userId?: string;
};

const User = () => {
  const { userId }: UserParams = useParams();
  console.log('RENDER', userId);
  const { isLoading, isError, data } = useProfile(userId);
  if (isLoading) {
    return <p>Loading profile...</p>;
  }
  if (isError || !isProfile(data)) {
    return <p>An error occurred!</p>;
  }

  return <UserProfile profile={data} />;
};

export default User;
