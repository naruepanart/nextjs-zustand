import create from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  teddy: 0,
  addTeddy: (payloads) => set((state) => ({ teddy: state.teddy + payloads })),
  setZeroTeddy: (payloads) => set({ teddy: payloads }),
});

store = persist(store, { name: "_teddy" });

const useStore = create(store);

export default useStore;
