import { useEffect, useState } from "react";

const App = () => {
  const sayHello = () => console.log("hello");
  const sayHello0 = () => console.log("0 activated");
  const sayHello1 = () => console.log("setNumber activated");
  const sayHello2 = () => console.log("setANumber activated");
  const [number, setNumber] = useState(0);
  const [anumber, setANumber] = useState(0);
  useEffect(sayHello, []);
  useEffect(sayHello0, [0]);
  useEffect(sayHello1, [number]);
  useEffect(sayHello2, [anumber]);
  return (
    <div>
      <div>Hello</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};

export default App;
