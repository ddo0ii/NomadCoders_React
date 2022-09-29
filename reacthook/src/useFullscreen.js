import { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    // full화면으로 변환하는 함수
    if (element.current) {
      if (element.current.requestFullscreen) {
        // chrome, safari
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        // firefox
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        // opera
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        // microsoft
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    // full화면을 해제하는 함수
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    // callback 함수
    console.log(isFull ? "Full" : "Small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <h1>Hello</h1>
      <div ref={element}>
        <img src="https://avatars.githubusercontent.com/u/49421129?v=4" />
        <button onClick={exitFull}>exitFull</button>
        <button onClick={triggerFull}>triggerFull</button>
      </div>
    </div>
  );
};

export default App;
