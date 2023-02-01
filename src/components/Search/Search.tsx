type Props = {};

const Search = ({}: Props) => {
  return (
    <form>
      <input type='text' name='username' />
      <button type='submit'>Search</button>
    </form>
  );
};

export default Search;
