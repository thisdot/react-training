import UserProfile from '../components/UserProfile';
import useProfile from '../hooks/useProfile';
import { useParams } from 'react-router-dom';
import { IProfile } from '../types/users';

type UserParams = {
  userId?: string;
};

const User = () => {
  const { userId }: UserParams = useParams();
  const { isLoading, isError, data } = useProfile(userId);

  if (isLoading) {
    return <p>Loading profile...</p>;
  }
  if (isError) {
    return <p>An error occurred!</p>;
  }

  return <UserProfile profile={data as IProfile} />;
};

export default User;
