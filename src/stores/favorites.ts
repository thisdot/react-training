import {create} from 'zustand';

interface favoritesStore {
    total: number;
    idList: Set<string>;
    toggleFavorite: (id: string) => void;
}
const useStore = create<favoritesStore>((set) => ({
    total: 0,
    idList: new Set(),
    toggleFavorite: (id) => set((state) => {
        const idList = new Set(state.idList);
        idList.delete(id);
        if (!state.idList.has(id)) {
            idList.add(id)
        }
        return {total: idList.size, idList };
    }),
}))

export {useStore}
