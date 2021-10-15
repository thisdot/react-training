import { useState } from 'react';

export const MultipleUseState = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [posts, setPosts] = useState([{ title: 'Use State' }]);
  const [followers, setFollowers] = useState(0);

  return (
    <div>
      <p>{firstName} {lastName}</p>
      <p>{posts}</p>
      <p>{followers}</p>
    </div>
  );
}
