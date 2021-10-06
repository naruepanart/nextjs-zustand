import Head from "next/head";
import Image from "next/image";
import useStore from "../store";

export default function Home() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  return (
    <div>
      <p>{bears}</p>
      <button onClick={increasePopulation}>one up</button>
    </div>
  );
}
