const KeysError = () => {
  const items: Array<{ id: number; name: string; }> = [
    { id: 1, name: 'Mario' },
    { id: 2, name: 'Luigi' },
  ];
  const listItems = items.map((item, index) =>
    <li>{item.name}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const KeysById = () => {
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

const KeysByIndex = () => {
  const items: Array<{ id: number; name: string; }> = [
    { id: 1, name: 'Mario' },
    { id: 2, name: 'Luigi' },
  ];
  const listItems = items.map((item, index) => 
    <li key={index}>{item.name}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const Keys = () => (
  <>
    <h1>Keys error</h1>
    <KeysError />
    <hr />
    <h1>Keys by id</h1>
    <KeysById />
    <hr />
    <h1>Keys by index</h1>
    <KeysByIndex />
  </>
);

export default Keys;