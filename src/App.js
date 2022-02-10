import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
       
       <h1>Beers:{counter} </h1>
       <h1>Add</h1>
       <button
       onClick={()=> setCounter(counter + 1)}
       >+</button>
       
       <h1>minus</h1>
       <button
       onClick={()=> setCounter(counter - 1)}
       >-</button>
       
       <h1>Reset</h1>
       <button
       onClick={()=> setCounter(0)}
       >Reset</button>
      </header>
    </div>
  );
}

export default App;
