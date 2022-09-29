import { useEffect, useState } from "react";

const useTitle = (iniitialTitle) => {
  const [title, setTitle] = useState(iniitialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("My React App...");
  setTimeout(() => {
    // 3초후 titleUpdater 실행
    titleUpdater("home");
  }, 3000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;
