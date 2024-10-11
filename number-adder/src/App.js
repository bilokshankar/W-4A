import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables to keep track of the result and history
  const [result, setResult] = useState(0);
  const [addVal, setAddVal] = useState(0);
  const [substrVal, setSubstrVal] = useState(0);
  const [history, setHistory] = useState([]);

  // Function to handle adding and subtracting values
  const updateResult = (value) => {
    setResult(prevResult => prevResult + value);
    if (value > 0) {
      setAddVal(prevAddVal => prevAddVal + value);
    } else {
      setSubstrVal(prevSubstrVal => prevSubstrVal - value);
    }
    setHistory(prevHistory => [...prevHistory, value]);
  };

  // Function to reset the result
  const resetResult = () => {
    setResult(0);
    setAddVal(0);
    setSubstrVal(0);
    setHistory([]);
  };

  // Function to clear data
  const clearData = () => {
    resetResult();
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Number Adder</a>
      </nav>

      {/* Main Container */}
      <div id="main-container">
        <div className="sidebar left-sidebar">
          <h2>TOTAL</h2>
          <div id="result">{result}</div><br/>
          <div id="status">{result === 0 ? 'The total is Zero' : (result > 0 ? 'The total is Positive' : 'The total is Negative')}</div><br/>
          <div>
            <h4>History</h4>
            <p>Total addition:&nbsp;<span id="totaladdn">{addVal}</span></p>
            <p>Total subtraction:&nbsp;<span id="totalsubstr">{substrVal}</span></p>
            <div id="history">{history.join(', ') || '0'}</div>
          </div>
        </div>

        <div className="content-area">
          <div className="sidebar right-sidebar">
            <h2>LET'S ADD</h2>
            <div className="buttons">
              <button className="control-btn" onClick={() => updateResult(-2)}>-2</button>
              <button className="control-btn" onClick={() => updateResult(-1)}>-1</button>
              <button className="control-btn" onClick={resetResult}>Reset</button>
              <button className="control-btn" onClick={() => updateResult(1)}>+1</button>
              <button className="control-btn" onClick={() => updateResult(2)}>+2</button>
            </div><br/>
            <div>
              <button className="btn btn-primary" onClick={clearData}>Clear History and Results</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
