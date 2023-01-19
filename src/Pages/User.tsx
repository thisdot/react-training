import UserProfile from "../components/UserProfile";
import useProfile from "../hooks/useProfile";

const User = ({ userId }) => {
    const { isLoading, isError, data } = useProfile(userId);
    if (isLoading) {
        return <p>Loading profile...</p>
    }
    if(isError) {
        return <p>An error occurred!</p>
    }

    return <UserProfile profile={data} />
}

export default User;
