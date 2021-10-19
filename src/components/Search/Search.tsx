import { SyntheticEvent, useState } from "react";

type Prop = {
  onSearch: (term: string) => void;
};

const Search = ({ onSearch }: Prop) => {
  const [username, setUsername] = useState('');

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          onChange={event => setUsername(event.target.value)}
          name="username" />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
