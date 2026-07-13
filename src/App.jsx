import React, { useState } from 'react'
// useState :
const App = () => {
  const [num, setNum] = useState(0)
   function increaseNum(){
    setNum(num+1);

   }
   function decreasingNum(){
    setNum(num-1);

   }
   function increase5Num(){
    setNum(num+5);
    

   }
  return (
    <div>
    <h1>{num}</h1>
    <button onClick={increaseNum}>increase</button>
    <button onClick={decreasingNum} >decrease</button>
    <button onClick={increase5Num}>increaseby5</button>
    </div>
  )
  }
export default App
