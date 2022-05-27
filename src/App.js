import React from 'react';
// import {useState} from 'react';
// import Todos from './components/Todos';
// import Timer from './components/Timer'
import './App.css';
import Stopwatch from './components/Stopwatch';
const App = () => {
  //const [show,setShow] = useState(true);
  return (
    // <div className='App' onClick={()=>setShow(!show)}>{show ? <Timer /> :"App" }
    // {/* //<Todos /> */}

    // </div>

    <div className='App'>
      <Stopwatch />

    </div>
  )
}

export default App
