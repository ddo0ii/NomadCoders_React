const useConfirm = (message = "", onConfirm, onCancel) => {
  // message의 기본값은 ""
  if (!onConfirm || typeof onConfirm !== "function") {
    return; // 매개변수 onConfirm가 없거나 onConfirm이 함수가 아나라면 return 실행
  }
  if (onCancel && typeof onCancel !== "function") {
    // onCancle은 필수요소는 아님
    return;
  }
  const confirmAction = () => {
    // confirm창의 응답에 따른 이벤트 실행 함수
    if (confirm(message)) {
      // 확인을 눌렀다면
      onConfirm();
    } else {
      // 취소를 눌렀다면
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("delete"); // 확인 눌렀을 때 실행할 함수
  const abortWorld = () => console.log("Aborted"); // 취소 눌렀을 때 실행할 함수

  const conformDelete = useConfirm("r u sure?", deleteWorld, abortWorld);

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={conformDelete}>Delete the world</button>
    </div>
  );
};

export default App;
