import React from "react";

function Food({ favorite }) {
  return <h1>I like {favorite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="gogi" />
    </div>
  );
}

export default App;
