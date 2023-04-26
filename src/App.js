import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [arrInputNumber, setArrInputNumber] = useState([]);
  
  const [inputType, setInputType] = useState("");

  const handleInput = (type, value) => {
    let arr = [];
    setInputType(type);

    if (type === "prima") {
      // map and use remainder to return prime values
      for (let i = 2; i <= value; i++) {
        let primeNumber = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
            primeNumber = false;
          }
        }
        if (primeNumber && value >= 0) {
          arr.push(i);
        }
      }
      if (arr.length === 0) alert("Input harus bilangan prima");
    } else if (type === "ganjil") {
      // map and use remainder to get odd values
      for (let i = 1; i <= value; i++) {
        if (i % 2 !== 0 && value >= 0) {
          arr.push(i);
        }
      }
      if (arr.length === 0) alert("Input harus bilangan ganjil");
    } else {
      // convert value to string and split into array
      let i = value?.toString().split('').map(Number);
      let str = "0";

      // increment the value length
      for (let len = 0; len <= value.length; len++) {
        i.map((ii, iIndex) => {
          // add the repeated string "0" if the index of incremented length is the same as index of converted array
          if (+len === +iIndex && value >= 0) {
            arr.push(ii.toString() + str.repeat(len + 1));
          }
        }
        )
      }
      if (arr.length === 0) alert("Input harus angka");
    }

    setArrInputNumber(arr);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={100} height={100} />
        <div>
          <h1 style={{margin:0, padding: 0}}>Test Technical Code</h1>
          <h5>by Viona Kaleb</h5>
        </div>

        {/* Input number */}
        <div>
          <input 
            type="number" 
            onChange={(e) => {
              setInputNumber(e?.target?.value)
              }} 
            value={inputNumber}
          ></input>
        </div>

        {/* Button to generate */}
        <div style={{marginTop: "0.5rem"}}>
          <button 
            onClick={(e) => {
              handleInput("segitiga", inputNumber)
            }}
            style={{margin: "0 0.1rem"}}
          >
            Generate Segitiga
          </button>
          <button 
            onClick={(e) => {
              handleInput("ganjil", inputNumber)
            }}
            style={{margin: "0 0.1rem"}}
          >
            Generate Bilangan Ganjil
          </button>
          <button
            onClick={(e) => {
              handleInput("prima", inputNumber)
            }}
            style={{margin: "0 0.1rem"}}
          >
            Generate Bilangan Prima
          </button>
        </div>
        
        {/* Show generated numbers */}
        <div>
          {inputType && arrInputNumber.length > 0 ?
            <p style={{textTransform: "capitalize"}}>{inputType}:</p> : ""
          }
          {inputType === "segitiga" ?
            <ul style={{margin: "0 5rem"}}>
              {arrInputNumber.map(input => 
                <li style={{listStyleType: "none"}}>{input}</li>
              )}
            </ul>
          : 
            <div style={{margin: "0 5rem"}}>
              {arrInputNumber.map(input => 
                <label style={{listStyleType: "none"}}>{input}, </label>
                )}
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
