import React from "react";

function Food(props) {
  console.log(props);
  return <h1>I like potato</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food
        fav="kimchi"
        something={true}
        papapapa={["hello", 1, 2, 3, 4, true]}
      />
    </div>
  );
}

export default App;
