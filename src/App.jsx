import "./App.css";
import { useState, useEffect } from "react";
import reviews from "../data/data";
import Employee from "./components/Employee";

function App() {
  const [person, setPerson] = useState();
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if(count < reviews.length - 1) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if(count > 0){
      setCount(count - 1);
    }
  };

  const randomCount = () => {
    const randomNumber = Math.floor(Math.random()*4)
    setCount(randomNumber)
  }

  let firstPerson = reviews[count];

  useEffect(() => {
    setPerson(count);
  }, []);
  return (
    <>
      <Employee firstPerson={firstPerson} decrementCount={decrementCount} incrementCount={incrementCount} randomCount={randomCount}/>
    </>
  );
}

export default App;
