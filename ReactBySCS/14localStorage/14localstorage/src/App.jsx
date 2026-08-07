import React from 'react'

const App = () => {
  
  // localStorage.clear()
  
  // localStorage.setItem('age', 19)

  // const age = localStorage.getItem('age')
  // const user = localStorage.getItem('user')
  // console.log(user, age)

  const user = {
    username: 'Ashu',
    age: 19,
    city: 'Noida'
  }

  localStorage.setItem('user', JSON.stringify(user))
  
  const user0 = JSON.parse(localStorage.getItem('user'))
  console.log(user0);

  return (
    <div>
      App
    </div>
  )
}

export default App
