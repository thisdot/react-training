import { create } from 'zustand';

interface favoritesStore {}
const useStore = create<favoritesStore>((set) => ({}));

export { useStore };
