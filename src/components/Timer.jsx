import React from 'react';
import {useEffect,useState} from 'react';
import '../App.css';

const Timer = () => {
    const[timer,setTimer] = useState(0);

    useEffect(() => {
    let id= setInterval(()=>{
          if(timer>100)
          {
           // clearInterval(id);
          }
          else{
            
            setTimer(timer+1);
          }
          
   // steal data
      },1000)
    
      return () => {
       clearInterval(id);
      }
    }, [timer])
    
  return (
    <div >
        Count up: {timer}
   
        {/* <button onClick={()=>setTimer((timer)=>timer+1)}>+</button>
        <button onClick={()=>setTimer((timer)=>timer-1)}>-</button> */}
       
        </div>
  )
}

export default Timer