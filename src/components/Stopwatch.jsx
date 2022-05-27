import React, { useRef } from 'react';
import {useState,useEffect} from 'react';
//import Displaywatch from './Displaywatch';


// function msToTime(duration) {
//   var milliseconds = Math.floor((duration % 1000) / 100),
//     seconds = Math.floor((duration / 1000) % 60),
//     minutes = Math.floor((duration / (1000 * 60)) % 60),
//     hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

//   hours = (hours < 10) ? "0" + hours : hours;
//   minutes = (minutes < 10) ? "0" + minutes : minutes;
//   seconds = (seconds < 10) ? "0" + seconds : seconds;

//   return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
// }
// console.log(msToTime(300000));

//useState(1000) and e=e+1000

const Stopwatch = () => {
  const[watch,setWatch] =useState(0);
  //const [timerId,setTimerId]=useState(null);
  const timerId =useRef(null);
  

  const start =()=>{
    console.log(timerId)
    if(!timerId.current)
    {
      let id = setInterval(()=>{
        setWatch((e)=> e + 1);
      },300);
      //setTimerId(id);
      timerId.current=id;
    }
   
  };
  const pause =()=>{
    clearInterval(timerId.current);
   // setTimerId(null);
   timerId.current=null
  };
  const reset =()=>{
    clearInterval(timerId.current);
    setWatch(0);
    timerId.current=null
  };

  useEffect(() => {
     return reset
  }, [])
  
     
  return (
    <>
    <div>
      <h2>Stopwatch </h2>
      {/* <h1>{msToTime(watch)}</h1>  */}
       <h1>{watch}</h1>
    </div>
    <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
    {/* <Displaywatch watch={watch} start={start} pause={pause} reset={reset}/> */}
    </>
  )
}

export default Stopwatch;