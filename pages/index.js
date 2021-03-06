import bearsStore from "../store/bearsStore";
import teddyStore from "../store/teddyStore";

export default function Home() {
  const bears = bearsStore((state) => state.bears);
  const addBears = bearsStore((state) => state.addBears);
  const setZeroBears = bearsStore((state) => state.setZero);

  const teddy = teddyStore((state) => state.teddy);
  const addTeddy = teddyStore((state) => state.addTeddy);
  const setZeroTeddy = teddyStore((state) => state.setZero);

  return (
    <div>
      <h1>{bears}</h1>
      <button onClick={() => addBears(2)}>+2</button>
      <button onClick={() => setZeroBears(0)}>0</button>
      <hr></hr>
      <h1>{teddy}</h1>
      <button onClick={() => addTeddy(5)}>+5</button>
      <button onClick={() => setZeroTeddy(0)}>0</button>
    </div>
  );
}
