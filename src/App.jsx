import "./App.css";
import { useState, useEffect } from "react";
import reviews from "../data/data";
import Employee from "./components/Employee";

function App() {
  const [person, setPerson] = useState();
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  let firstPerson = reviews[count];

  useEffect(() => {
    setPerson(count);
  }, []);
  return (
    <>
      <Employee firstPerson={firstPerson} />
    </>
  );
}

export default App;
