import { SyntheticEvent, useState } from "react";

type Props = {
  onSearch: (term: string) => void;
};

const Search = ({ onSearch }: Props) => {
  const [search, setSearch] = useState('');

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onSearch(search);
  };
  
  return (
    <main>
      <section>
        <form onSubmit={onSubmit}>
          <input 
            type="text" 
            onChange={event => setSearch(event.target.value)}
            data-testid="username"
            name="username" />
          <button>Search</button>
        </form>
      </section>
    </main>
  );
}

export default Search;
