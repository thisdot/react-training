import {useStore} from "../stores/favorites";

type FavoriteButtonProps = {
    id: string
}
const FavoriteButton = ({ id }: FavoriteButtonProps) => {
    const { toggleFavorite, idList } = useStore();
    return (
        <button type="button" onClick={() => toggleFavorite(id)}>
            {idList.has(id) ? "★" : "☆" }
        </button>
    )
}

export default FavoriteButton;
