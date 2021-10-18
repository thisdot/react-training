import { useState } from "react";

type TodoItem = {
  id: number;
  text: string;
};

export const Todo = () => {
  const [items, setItems] = useState<Array<TodoItem>>([]);
  const [text, setText] = useState("");

  const handleChange = (e: any) => setText(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    const newItem = {
      text,
      id: Date.now(),
    };

    setText("");
    setItems(items.concat(newItem));
  };

  return (
    <div>
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
