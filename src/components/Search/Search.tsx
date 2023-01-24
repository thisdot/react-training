import { SyntheticEvent, useState } from "react";

type Prop = {
  onSearch: (term: string) => void;
  lastQuery?: string | undefined
};

const Search = ({ onSearch, lastQuery }: Prop) => {
  const [username, setUsername] = useState('');

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          onChange={event => setUsername(event.target.value)}
          name="username"
          value={lastQuery}
        />
        <button>Search</button>
      </form>
  );
}

export default Search;
