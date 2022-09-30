import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick === "function") {
      // componentDidMount, componentDidUpdate 일 때 실행하는 부분
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
    }
    return () => {
      // componentWillUnmount 일 때 실행하는 부분
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  // const potato = useRef(); // getElementById와 동일한 개념
  // setTimeout(() => console.log(potato.current.value), 2000);
  // setTimeout(() => potato.current.focus(), 2000);
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello); // useClick으로 ref 새성

  return (
    <div>
      <div>
        <h1 ref={title}>Hi</h1>
      </div>
      {/* <input ref={potato} placeholder="la" /> */}
    </div>
  );
};

export default App;
