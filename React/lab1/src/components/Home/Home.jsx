
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Home.css"
import Cards from '../cards/Cards.jsx'




export default function Home() {


const [devices, setDevices] = useState([]);
let [images , setImages] = useState([])
let [currentImage , setCurrentImage] = useState('')
let [index , setIndex] =useState(0)
// slider
function next() {
    setIndex((index + 1) % images.length)
    console.log(index);
    
}
function prev() {
    setIndex(( index - 1  + images.length) % images.length)
    console.log(index);
    
}



    axios.get("http://localhost:3000/devices")
      .then((res) => {
        
        setDevices(res.data)
       let imgs = res.data.map((device)=> device.image)
        setImages(imgs)

        
      })
      .catch((err) => {
        console.log(err)
      })




  return (
    <>      <main className="home">
          {/* slider */}
      <div className="carousel">
        <div className="container">
          <div className="image-container">
            <img src={images[index]} alt="" />
          </div>
          <div className="controlling">
            <button className="prev"  onClick={prev}>&lt;</button>
            <button className="next" onClick={next}>&gt; </button>
          </div>
        </div>
      </div>
      {/* form */}
        <div className="form-section">
          <h2>Add Item</h2>
          <div id='form'>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Description" />
            <button type="submit">Add</button>
          </div>
        </div>

          {/* cards */}
        <div className="cards-section">

          {devices.map((item) => (
            <Cards key={item.id} product={item} />
          ))}

        </div>

      </main></>
  )
}
