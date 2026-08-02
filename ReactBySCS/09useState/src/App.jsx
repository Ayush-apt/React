import React, {useState} from 'react'

const App = () => {

  const [val, setVal] = useState(0)

  const inc = () => {
    setVal(val+1)
  }
  const dec = () => {
    setVal(val-1)
  }
  const jump = () => {
    setVal(val+5)
  }
  const red = () => {
    setVal(val-5)
  }
  const reset = () => {
    setVal(0)
  }
  
  return (
    <div className='btns'>
      <h1 className='num'>{val}</h1>
      <div className="buttons">
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={jump}>Jump By 5</button>
        <button onClick={red}>Reduce By 5</button>
      </div>
    </div>
  )
}

export default App
