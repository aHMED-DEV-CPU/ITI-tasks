import React, { Component } from 'react'
import axios from 'axios'
import "./Home.css"
import Cards from '../cards/Cards.jsx'

export default class Home extends Component {

  state = {
    devices: [],
    images: [],
    index: 0,
// task 3
        title: "",
    description: "",
    image: "",
  }


  next = () => {
    this.setState((prevState) => ({
      index: (prevState.index + 1) % prevState.images.length
    }))
  }


  prev = () => {
    this.setState((prevState) => ({
      index:
        (prevState.index - 1 + prevState.images.length) %
        prevState.images.length
    }))
  }


  componentDidMount() {
    axios.get("http://localhost:3000/devices")
      .then((res) => {
        const imgs = res.data.map(device => device.image)

        this.setState({
          devices: res.data,
          images: imgs
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

// task 3
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

   addDevice = () => {
    const { title, description, image, devices } = this.state;

    axios
      .post("http://localhost:3000/devices", {
        title,
        description,
        image,
      })
      .then((res) => {
        const newDevices = [...devices, res.data];

        this.setState({
          devices: newDevices,
          images: newDevices.map((d) => d.image),
          title: "",
          description: "",
          image: "",
        });
      });
  };



  render() {


    {
    const {
      devices,
      images,
      index,
      title,
      description,
      image,
    } = this.state;

    return (
      <main className="home">
        {/* slider */}
        <div className="carousel">
          <div className="container">
            <div className="image-container">
              <img src={images[index]} alt="" />
            </div>

            <div className="controlling">
              <button onClick={this.prev}>&lt;</button>
              <button onClick={this.next}>&gt;</button>
            </div>
          </div>
        </div>

        {/* form */}
        <form
          className="form-section"
          onSubmit={(e) => {
            e.preventDefault();
            this.addDevice();
          }}
        >
          <h2>Add Item</h2>

          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={image}
            onChange={this.handleChange}
          />

          <button type="submit">Add</button>
        </form>

        {/* cards */}
        <div className="cards-section">
          {devices.map((item) => (
            <Cards key={item.id} product={item} />
          ))}
        </div>
      </main>
    );
  }
}
}