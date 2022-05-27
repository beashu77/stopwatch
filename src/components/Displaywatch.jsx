import React from 'react'

const Displaywatch = (watch,start,pause,reset) => {
  return (
    <div>
        <h1>{watch}</h1>
   <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
        
    </div>
  )
}

export default Displaywatch