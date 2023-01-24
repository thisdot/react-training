import UserProfile from "../components/UserProfile";
import useProfile from "../hooks/useProfile";
import {IProfile} from "../types/users";

const isProfile = (profile: any): profile is IProfile => Object.keys(profile).length === 0
type UserProps = {
    userId: string
}
const User = ({ userId }: UserProps) => {
    const { isLoading, isError, data } = useProfile(userId);
    if (isLoading) {
        return <p>Loading profile...</p>
    }
    if(isError || !isProfile(data)) {
        return <p>An error occurred!</p>
    }

    return <UserProfile profile={data} />
}

export default User;
