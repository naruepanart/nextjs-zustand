import bearsStore from "../store/bearsStore";

export default function Home() {
  const bears = bearsStore((state) => state.bears);
  const increasePopulation = bearsStore((state) => state.increasePopulation);
  const removeAllBears = bearsStore((state) => state.removeAllBears);

  return (
    <div>
      <p>{bears}</p>
      <button onClick={() => increasePopulation(2)}>+2</button>
      <button onClick={() => removeAllBears(0)}>0</button>
    </div>
  );
}
