import React, {useState} from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  const getData = async() => {
    // const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

    const response = await axios.get('https://picsum.photos/v2/list')

    console.log(response.data);
    
    setData(response.data)

  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>

        {data.map( (elem, idx) => {
          return(
            <div>
              <h3>{idx}. {elem.author}</h3>
              <img height = "100px" width="200px" src={elem.download_url} alt={elem.author} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
