import { useState } from "react";
import SurpriseMeButton from "./SurpriseMeButton";

const Employee = ({
  firstPerson,
  incrementCount,
  decrementCount,
  randomCount,
}) => {
  const [count, setCount] = useState(0);
  const randomCountHandler = () => {
    randomCount();
  };

  const decrementCountHandler = () => {
    decrementCount();
  };

  const incrementCountHandler = () => {
    incrementCount();
  };

  return (
    <>
      <article className="w-[560px] h-[500px] flex flex-col items-center justify-center p-4 bg-white shadow-md">
        <div className="relative">
          <span className="absolute w-[40px] h-[40px] top-1 left-0 bg-blue-500  text-white rounded-full p-2 z-20 ">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M6 6a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <img
            src={firstPerson.image}
            alt={firstPerson.image}
            className="h-[180px] w-[180px] object-cover mx-auto rounded-full relative z-10"
          ></img>
          <span className="absolute top-[-4px] right-[-6px] h-[180px] w-[180px] bg-blue-500 rounded-full"></span>
        </div>
        <h2 className="capitalize pt-2">{firstPerson.name}</h2>
        <h3 className="uppercase pt-2 text-blue-500">{firstPerson.job}</h3>
        <p className="pt-2">{firstPerson.text}</p>
        <div className="flex gap-2 p-4">
          <svg
            onClick={decrementCountHandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>

          <svg
            onClick={incrementCountHandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Klikni m,e</button>
        <SurpriseMeButton randomCount={randomCountHandler} />
      </article>
    </>
  );
};

export default Employee;
