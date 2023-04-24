import { useStore } from '../stores/favorites';

const FavoriteCount = () => {
  const { total } = useStore();
  return <p>{total}</p>;
};

export default FavoriteCount;
