import { useRef } from "react";

const App = () => {
  const inputElement = useRef(); // useRef()를 사용하여 ref객체 생성
  console.log(inputElement);
  // Object {current: HTMLInputElement} 객체로 구성되어 있고, 내부에 current라는 속성이 있음
  // current: <input placeholder="hi"></input> current는 태그 그 자체

  setTimeout(() => inputElement.current.focus(), 3000);

  return (
    <div className="App">
      <div>Hi</div>
      <input ref={inputElement} placeholder="hi" />{" "}
      {/* ref 값으로 inputElement 지정 */}
    </div>
  );
};

export default App;
