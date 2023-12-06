import React, { useState, useEffect} from 'react'
import axios from 'axios'


const api_key = 'DEMO_KEY'
const url = 'https://api.nasa.gov/planetary/apod?api_key={api_key}'


function Card({ title, text, imageURL, date}) {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <figure
      imageURL={imageURL}
      captions={date}
      />
      </div>
  )
}





function App() {
  const [apod, setapod] = useState()


  useEffect(() => {
    function fetchphoto() {
      axios.get(url)
      .then(res => {
        console.log(res.data)
        setapod(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  fetchphoto()
}, [])
  return (
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    </p>
  )
}

export default App
