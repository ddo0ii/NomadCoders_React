import { useState } from "react";

const App = () => {
  const [item, setItem] = useState(1);
  const increament = () => setItem(item + 1);
  const decreament = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>decreament</button>
    </div>
  );
};

export default App;
