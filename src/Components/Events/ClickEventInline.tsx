import { useState } from "react";

export default function ClickEventInline() {
  const [users, setUsers] = useState(['Mario', 'Luigi', 'Bowser']);
  
  const remove = (name: string) => {
    setUsers(users.filter(user => user !== name));
  };

  return (
    <ul>
      {users.map(name => (
        <li key={name}>
          {name}
          <button onClick={() => remove(name)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
