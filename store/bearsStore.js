import create from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  bears: 0,
  addBears: (payloads) => set((state) => ({ bears: state.bears + payloads })),
  setZeroBears: (payloads) => set({ bears: payloads }),
});

store = persist(store, { name: "_bears" });

const useStore = create(store);

export default useStore;
