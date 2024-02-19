import "./App.css";
import { useState, useEffect, createContext } from "react";
import reviews from "../data/data";
import Employee from "./components/Employee";
export const AppContext = createContext(0);

function App() {
  const [person, setPerson] = useState();
  const [count, setCount] = useState(0);


  const incrementCount = () => {
    setTimeout(() => {
      if (count < reviews.length - 1) {
        setCount((prev) => prev + 1);
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
      let newRandomNumber;
      do {
        newRandomNumber = Math.floor(Math.random() * reviews.length);
      } while (newRandomNumber === count); 
      setCount(newRandomNumber);
    }, 500);
  };
  

  let firstPerson = reviews[count];
  const ctxValue = {
    count,
    incrementCount,
    decrementCount,
    randomCount
  }

  useEffect(() => {
    setPerson(count);
  }, []);
  return (
      <AppContext.Provider value={ctxValue}>
        <Employee
          firstPerson={firstPerson}
          decrementCount={decrementCount}
          incrementCount={incrementCount}
          randomCount={randomCount}
        />
      </AppContext.Provider>
  );
}

export default App;
