import React, {useState} from 'react'
import Card from './components/Card'

const App = () => {

  const [head, setHead] = useState('') 
  const [detail, setDetail] = useState('') 
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    setTask([...task, { head, detail }]);

    console.log("submitted successfully")
    setHead('')
    setDetail('')
  }

  return (
    <div className='h-screen lg:flex w-full bg-black text-white'>

      <div className='w-1/2 p-10 gap-4 flex flex-col items-start'>
        <h1 className='text-2xl font-bold'>Add Notes</h1>

        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex flex-col gap-4 w-full'>

          <input className='w-full font-medium px-5 py-2 border-2 rounded outline-none'
          type="text"
          placeholder='Enter Notes Heading'
          value={head}
          onChange={(e)=>{
            setHead(e.target.value)
          }}
          />

          <input className='w-full h-32 font-medium px-5 py-2 flex items-start flex-row border-2 rounded outline-none'
          type="text"
          placeholder='Enter Details'
          value={detail}
          onChange={(e)=>{
            setDetail(e.target.value)
          }}
          />    

          <button className='w-full font-medium active:bg-gray-400 active:text-white active:scale-95 px-5 py-2 bg-white text-black rounded'>Add Note</button>
        </form>   
      </div>


      <div className='lg:w-1/2 lg:border-l-2 sm:border-t-2 border-white  flex flex-col bg-gray-800 p-10'>
        <h1 className='text-2xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap h-full overflow-auto gap-5 mt-5'>
          {
            task.map( (elem) => {
              return(
                <Card 
                  head= {elem.head}
                  detail= {elem.detail}
                />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default App
