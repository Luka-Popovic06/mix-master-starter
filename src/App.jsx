import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <form className="search-form">
        <input
          type="text"
          className="text-input"
          id="text-input"
          name="text-input"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </>
  );
}

export default App;
