import "./App.css";
import { useState, useEffect } from "react";
import reviews from "../data/data";
import Employee from "./components/Employee";

function App() {
  const [person,setPerson] = useState();
  
  useEffect(() => {
  setPerson(reviews)
  console.log(reviews)
  }, [])
  return (
    <>
    </>
  );
}

export default App;
