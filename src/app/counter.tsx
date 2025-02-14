"use client";

import { useState } from "react";

type CounterProps = {
  initialCount: number;
};

export default function Counter({ initialCount }: CounterProps) {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const restart = () => {
    setCount(0);
  };

  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full border">
      <h1 className="text-3xl font-bold">Count:</h1>
      <p className="text-3xl font-bold">{count}</p>
      <div className="mt-[2rem] flex gap-[1rem]">
        <button
          className="bg-neutral-500 text-white p-2 rounded-md hover:bg-neutral-700"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-neutral-500 text-white p-2 rounded-md hover:bg-neutral-700"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="bg-neutral-500 text-white p-2 rounded-md hover:bg-neutral-700"
          onClick={restart}
        >
          Restart
        </button>
        <button
          className="bg-neutral-500 text-white p-2 rounded-md hover:bg-neutral-700"
          onClick={switchSigns}
        >
          Switch Signs
        </button>
      </div>
    </div>
  );
}
