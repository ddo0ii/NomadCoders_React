import { func } from "prop-types";
import { useEffect, useState } from "react";

function Hello() {
  function byeFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byeFn;
  }

  // 아래의 방법을 많이 사용한다
  // 방법1 (이것이 더 짧기 때문에 이것을 더 많이 사용)
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  // 방법2
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
