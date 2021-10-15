import { useState } from 'react';
 
const CallbackDemo = () => {
  console.log('Render: CallbackDemo');

  const [users, setUsers] = useState([
    { name: 'Robin' },
    { name: 'Batman' },
  ]); 
  const [text, setText] = useState('');
 
  const handleText = (event: any) => {
    setText(event.target.value);
  };
 
  const handleAddUser = () => {
    setUsers(users.concat({ name: text }));
  };
 
  const handleRemove = (name: string) => {
    setUsers(users.filter((user) => user.name !== name));
  };
 
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button> 
      <List list={users} onRemove={handleRemove} />
    </div>
  );
};
 
const List = ({ list, onRemove }: any) => {
  console.log('Render: List');
  return (
    <ul>
      {list.map((item: any) => (
        <ListItem key={item.name} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
};
 
const ListItem = ({ item, onRemove }: any) => {
  console.log('Render: ListItem');  
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
};
 
export default CallbackDemo;