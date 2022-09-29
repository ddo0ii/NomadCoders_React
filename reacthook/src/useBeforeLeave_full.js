import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  const handle = (event) => {
    const { clientY } = event;
    // 마우스가 아래가 아니라 위로 갔을 때만 onBefore function 실행!
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []); // 맨 처음 mount될 때 한번만 이벤트가 실행되기를 원함.
};

export default function App() {
  const begForLife = () => console.log("Pls dont leave...");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
