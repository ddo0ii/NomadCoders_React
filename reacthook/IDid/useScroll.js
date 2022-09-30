const { useState, useEffect } = require("react");

const useScroll = () => {
  const [state, setState] = useState({
    x: 0, // x와 y의 초기값을 0으로 지정
    y: 0,
  });

  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
    console.log("y ", window.scrollY, "x ", window.scrollX);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll); // scorll할 때 onScroll 이벤트 핸들러 지정
    return () => window.removeEventListener("scroll", onScroll); // clean up
  }, []);

  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "200vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
};

export default App;
