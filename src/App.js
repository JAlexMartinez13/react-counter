import { useEffect, useState } from 'react';
import Coffees from './Coffees';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState('')


  useEffect(()=>{
    setCounter(500)
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>counter:{counter} </h1>
       
      
       <button
       onClick={()=> setCounter(counter + 1)}
       >+</button>
        
        {counter > 0 &&
        <button
        onClick={() => {setCounter(counter - 1)}}>
          -
        </button>}
        
     
       
       <button
       onClick={()=> setCounter(0)}
       >Reset</button>
  
       <Coffees/> 

       
      </header>
    </div>
  );
}

export default App;
