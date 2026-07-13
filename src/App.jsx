// import React, { useState } from 'react'
// // useState :
// const App = () => {
//   const [num, setNum] = useState(0)
//    function increaseNum(){
//     setNum(num+1);

//    }
//    function decreasingNum(){
//     setNum(num-1);

//    }
//    function increase5Num(){
//     setNum(num+5);
    

//    }
//   return (
//     <div>
//     <h1>{num}</h1>
//     <button onClick={increaseNum}>increase</button>
//     <button onClick={decreasingNum} >decrease</button>
//     <button onClick={increase5Num}>increaseby5</button>
//     </div>
//   )
//   }
// export default App


// form handling 
// import React from 'react'

// const App = () => {
//   const submitHandler=(e) =>{
//     e.preventDefault()
//     console.log("Form submitted");
    
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)

//       }
      
//     }>
//     <input type="text" placeholder='enter  ur name ' />
//     <button> submit</button></form>
//     </div>
//   )
// }

// export default App
import React from 'react'
localStorage.setItem('Age',19)
const user = localStorage.getItem('user:')
const Age = localStorage.getItem('Age')
console.log(user,Age);

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App

