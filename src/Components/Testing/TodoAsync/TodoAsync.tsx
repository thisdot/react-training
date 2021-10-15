import React from "react";
import "./styles.css";

type TodoItem = {
  id: number;
  text: string;
};

export const api = {
  createItem: (url: string, newItem: any) => {
    return Promise.resolve(newItem);
  }
};

export const TodoAsync = () => {
  const [items, setItems] = React.useState<Array<TodoItem>>([]);
  const [text, setText] = React.useState("");

  const handleChange = (e: any) => setText(e.target.value);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    const newItem = {
      text,
      id: Date.now(),
    };

    const item: TodoItem = await api.createItem("/items", newItem);
    setText("");
    setItems(items.concat(item));    
  };

  return (
    <div>
      <h1>Todos</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <br />
        <input id="new-todo" value={text} onChange={handleChange} />
        <button>Add todo #{items.length + 1}</button>
      </form>
    </div>
  );
};
