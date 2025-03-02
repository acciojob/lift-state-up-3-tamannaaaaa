import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 onSelect={() => setSelectedOption("Option 1")} />
      <ChildComponent2 onSelect={() => setSelectedOption("Option 2")} />
      <h3>Selected Option: {selectedOption || "None"}</h3>
    </div>
  );
};

const ChildComponent1 = ({ onSelect }) => {
  return (
    <div className="child1">
      <h2>Child Component 1</h2>
      <button onClick={onSelect}>Option 1</button>
    </div>
  );
};

const ChildComponent2 = ({ onSelect }) => {
  return (
    <div className="child2">
      <h2>Child Component 2</h2>
      <button onClick={onSelect}>Option 2</button>
    </div>
  );
};

export default App;
