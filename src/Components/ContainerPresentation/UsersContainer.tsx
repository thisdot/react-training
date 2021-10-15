import { useEffect, useState } from "react";
import UserPresentation from "./UserPresentation";

export interface UserModel {
  firstName: string;
  lastName: string;
}

const UsersContainer = () => {
  const [users, setUsers] = useState<Array<UserModel>>([]);

  useEffect(() => {
    // let's mock an axios or fetch API call
    const users: Array<UserModel> = [
      { firstName: 'John', lastName: 'Smith' },
      { firstName: 'Adam', lastName: 'White' },
    ];
    setUsers(users);
  }, []);

  return (
    <div>
      {users.map(user => (
        <UserPresentation key={user.firstName} user={user} />
      ))}
    </div>
  );
}

export default UsersContainer;