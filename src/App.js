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

    // 4. Generate segitiga
    if (type === "segitiga") {
      // Convert value ke string dan split jadi array
      let i = value?.toString().split('').map(Number);
      let str = "0";

      // Increment value length
      for (let len = 0; len <= value.length; len++) {
        i.map((ii, iIndex) => {
          // Tambahkan string increment "0" jika index dari length yg di-increment sama dengan index dari array yg di-convert
          if (+len === +iIndex && value >= 0) {
            arr.push(ii.toString() + str.repeat(len + 1));
          }
        }
        )
      }
      // 1. Validasi angka secara manual
      if (arr.length === 0) alert("Input harus angka");
    } 
    // 5. Generate bilangan ganjil
    else if (type === "ganjil") {
      // Map dan pakai remainder untuk memperoleh bilangan ganjil
      for (let i = 1; i <= value; i++) {
        if (i % 2 !== 0 && value >= 0) {
          arr.push(i);
        }
      }
      if (arr.length === 0) alert("Input harus bilangan ganjil");
    } 
    // 6. Generate bilangan prima
    else if (type === "prima") {
      // Map dan pakai remainder untuk memperoleh bilangan prima
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

        {/* 2. Eksekusi button */}
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
        
        {/* 3. Menampilkan hasil */}
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
