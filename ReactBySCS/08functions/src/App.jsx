import React from 'react'

const App = () => {
/*

  function btnClick(){
    console.log("Button is cliked")
  }

  function mouseEnter(){
    console.log("Mouse Entered")
  }

*/

  return (
    <div>
      <button onMouseEnter={() => {
        console.log("Mouse Entered")
      }} >Click here</button>
    </div>
  )
}

export default App
