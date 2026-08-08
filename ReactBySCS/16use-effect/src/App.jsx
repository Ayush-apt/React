import React, { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  /*

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)

  useEffect(function () {
    console.log('use effect is running...')
  }, [num])

  return (
    <div>
      <h1>value of num is {num}</h1>
      <h1>value of num2 is {num2}</h1>
      <button
      onClick={() => {
        setNum2(num2 + 1)
      }}
      onDoubleClick={() => {
        setNum(num + 1)
      }}
      >
        Click</button>
    </div> 
  )
}
  */

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('Value of A has been changed');
    
  }

  function bChanging(){
    console.log('Value of B has been changed');
  }

  useEffect(function(){
    aChanging()
    console.log('Use effect is running...'); 
  },[a])

return(
  <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={() => {
        setA(a+1)
      }}
      >Change A</button>
      <button
      onClick={() => {
        setB(b-1)
      }}
      >Change B</button>
  </div>
)}

export default App
