import "./App.css";
import { useState, useEffect } from "react";
import reviews from "../data/data";
import Employee from "./components/Employee";

function App() {
  const [person, setPerson] = useState();
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setTimeout(() => {
      if (count < reviews.length - 1) {
        setCount((prev) => prev + 1 );
      } else {
        setCount(0);
      }
    }, 500);
  };

  const decrementCount = () => {
    setTimeout(() => {
      if (count > 0) {
        setCount((prev) => prev - 1);
      } else {
        setCount(reviews.length - 1);
      }
    }, 500);
  };

  const randomCount = () => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 4);
      setCount(randomNumber);
    }, 500);
  };

  let firstPerson = reviews[count];

  useEffect(() => {
    setPerson(count);
  }, []);
  return (
    <>
      <Employee
        firstPerson={firstPerson}
        decrementCount={decrementCount}
        incrementCount={incrementCount}
        randomCount={randomCount}
      />
    </>
  );
}

export default App;
