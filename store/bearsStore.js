import create from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  bears: 0,
  increasePopulation: (payloads) => set((state) => ({ bears: state.bears + payloads })),
  removeAllBears: (payloads) => set({ bears: payloads }),
});

store = persist(store, { name: "_dhp" });

const useStore = create(store);

export default useStore;
