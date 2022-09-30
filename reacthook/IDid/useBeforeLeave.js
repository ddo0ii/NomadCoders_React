import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  const handle = (event) => {
    const { clientY } = event; // event : MouseEvent의 객체
    if (clientY <= 0) {
      // clientY(마우스의 좌표값)가 0 이하
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle); // 컴포넌트가 mount 되면, mouseleave 이벤트 생성
    return () => document.removeEventListener("mouseleave", handle); // 컴포넌트가 unmount 되면, mouseleave 이벤트 제거
  }, []); // 이벤트가 document에 추가 되는 것을 막음(한번만 실행)
};

const App = () => {
  const dontLeave = () => console.log("Pls dont leave");
  useBeforeLeave(dontLeave);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
