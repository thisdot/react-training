const KeysById: React.FC = () => {
  const items: Array<{ id: number; name: string; }> = [
    { id: 1, name: 'Mario' },
    { id: 2, name: 'Luigi' },
  ];
  const listItems = items.map((item) =>
    <li key={item.id}>{item.name}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
export default KeysById;