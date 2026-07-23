<<<<<<< HEAD
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About  from './pages/About'
import  Contact from './pages/Contact'
import Navbar from  './assets/Components/Navbar'

const App = () => {
  return (

    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Contact" element={<Contact />}/>
    </Routes>
=======
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
// import React from 'react'
// localStorage.setItem('Age',19)
// const user = localStorage.getItem('user:')
// const Age = localStorage.getItem('Age')
// console.log(user,Age);

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App

//gallery 
import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userdata, setUserdata] = useState([])

  const Getdata = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    setUserdata(response.data)
    console.log(response.data)
  }

  let PrintUserData = "No user is available"
  if (userdata.length > 0) {
    PrintUserData = userdata.map(function (elem, idx) {
      return (
        <a key={idx} href={elem.url} target='_blank' rel="noopener noreferrer">
          <div className='h-40 w-44 bg-white'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      )
    })
  }

  return (
    <div className='bg-black p-5 h-screen text-white overflow-auto'>
      <button onClick={Getdata} className='text-white rounded px-5 py-2 active:scale-95 mb-3 bg-green-400'>
        Get Data
      </button>
      <div className='flex flex-wrap gap-2'>
        {PrintUserData}
      </div>
      <div className='flex justify-center items-center gap-4 p-4'>
        <button className='bg-amber-300 px-4 py-2 text-black  rounded'>Prev</button>
        <button className='bg-amber-300 px-4 py-2 text-black  rounded'>Next</button>
      </div>
>>>>>>> 9f211d1aeb33834ff04537d40e6a70ce8798598b
    </div>
  )
}

<<<<<<< HEAD
export default App
 
=======
export default App
>>>>>>> 9f211d1aeb33834ff04537d40e6a70ce8798598b
