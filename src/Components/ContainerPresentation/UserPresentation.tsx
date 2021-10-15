import { UserModel } from "./UsersContainer";

type Props = {
  user: UserModel;
}

const UserPresentation = ({ user }: Props) => {
  return (
    <div>
      <p>{user.firstName} {user.lastName}</p>
    </div>
  );
}

export default UserPresentation;