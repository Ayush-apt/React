import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from './component/Card'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(3)

  const getData =  async() => { 
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)  
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[index])


  let printUserData =(
    <h3 className="text-gray-400 text-xl font-bold fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    Fetching Data...
    </h3>
  )

  if(userData.length > 0){
    printUserData = userData.map( (elem,idx) => {
      return(
        <div key={idx}>
          <Card elem={elem} ></Card>
        </div>
      )
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>


      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center gap-4 px-4 py-3'>
        <button onClick={ () => {
          if(index > 1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        style={{ opacity: index == 1 ? 0.5 : 1}}
        className='bg-blue-500 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'>
        Prev
        </button>

        <div>Page {index}</div>

        <button onClick={ () => {
          if(index <= 6){
            setIndex(index+1)
            setUserData([])
          }
        }}
        style={{ opacity: index == 7 ? 0.5 : 1}}
        className='bg-blue-500 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'>
        Next
        </button>
      </div>

    </div>
  )
}

export default App
