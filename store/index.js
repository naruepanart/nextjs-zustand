import create from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
});

store = persist(store,{name : "_dhp"});

const useStore = create(store);

export default useStore;
