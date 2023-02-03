type FavoriteButtonProps = {
  id: string;
};
const FavoriteButton = ({ id }: FavoriteButtonProps) => {
  const idList = new Set(); // Swap this out for the store
  return <button type='button'>{idList.has(id) ? '★' : '☆'}</button>;
};

export default FavoriteButton;
