import React, {useState} from 'react'

const App = () => {

  /*
  const [num, setNum] = useState({user: "Ashu", age:19})

  const btnCliked = () =>{
    const newNum = {...num}
    newNum.user = "Ashly"
    newNum.age = 18
    setNum(newNum)
  }
  */

  /*
  const [num, setNum] = useState({user:'Ash', age:17})

  const btnClicked = () => {
    setNum(prev => ({...prev, age:50}))
  }
  */

  const [num, setNum] = useState(10)

  const btnClicked = () => {
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
