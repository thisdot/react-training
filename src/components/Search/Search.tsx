import { FormEvent } from 'react';

type Props = {
  onSearch: (query: string) => void;
};

const Search = ({ onSearch }: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSearch(`${formData.get('username')}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='username' />
      <button type='submit'>Search</button>
    </form>
  );
};

export default Search;
