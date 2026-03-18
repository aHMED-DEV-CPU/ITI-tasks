import React, { Component } from 'react'
import './cards.css'

export default class Cards extends Component {
  render() {

    const { title, description, image } = this.props.product

    return (
      <div className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }
}