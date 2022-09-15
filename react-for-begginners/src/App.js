import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((pre) => pre + 1);
  console.log("I run all the time");
  useEffect(() => {
    console.log("Call the API...");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
