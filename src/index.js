import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// implement the useDebounce custom hook
// it should return the original value until
// the value has not changed in delay ms
// you may change code only in function below
// also you can import whatever you need
function useDebounce(value, delay) {
  const [newValue, setNewValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNewValue(value);
    }, delay);
    clearTimeout(timeout);
  }, [value, delay]);
  return newValue;
}

function App() {
  const delay = 2000;
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, delay);

  const handleInputChange = event => setQuery(event.target.value);

  return (
    <div className="App">
      <input type="text" value={query} onChange={handleInputChange} />
      <p>Query: {query}</p>
      <p>Debounced Query: {debouncedQuery}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
