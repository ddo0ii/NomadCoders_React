import { useEffect, useState, useRef } from "react";

const useClick = (onClick) => {
  // onClick function이 비면 아무것도 실행하지 않음!
  if (typeof onClick !== "function") {
    return;
  }

  const element = useRef();

  useEffect(() => {
    // mount, update시 실행
    // dependency 없으므로 update는 고려 안하겠지!
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // function을 return 받았다는 것은, componentWillUmnount로부터 받은 것
    return () => {
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
  // setTimeout(() => console.log(potato.current.focus()), 2000);
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
