import "./App.css";
import { useState, useEffect } from "react";
import reviews from "../data/data";
import Employee from "./components/Employee";

function App() {
  const [person, setPerson] = useState();
  const [firstPerson] = reviews;
  useEffect(() => {
    setPerson(reviews);
    console.log(firstPerson)
    console.log(reviews);
  }, []);
  return (
    <>
      <Employee firstPerson={firstPerson}/>
    </>
  );
}

export default App;
