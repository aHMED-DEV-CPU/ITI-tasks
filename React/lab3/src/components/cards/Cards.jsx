import React, { Component } from 'react'
import './cards.css'
import Like from '../Like/Like.jsx'
import UnLike from '../UnLike/UnLike.jsx'

export default class Cards extends Component {
state = {
  isLiked: false,
  isDisliked: false
}
toggleLike = () => {
  this.setState((prevState) => ({
    isLiked: !prevState.isLiked,
    isDisliked: prevState.isLiked ? prevState.isDisliked : false
  }))
}
toggleDislike = () => {
  this.setState((prevState) => ({
    isDisliked: !prevState.isDisliked,
    isLiked: prevState.isDisliked ? prevState.isLiked : false
  }
))
}
  
  render() {

    const { title, description, image } = this.props.product


    return (
      <div className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='interactions'>
          <Like toggleLike={this.toggleLike} Like={this.state.isLiked}></Like>
          <UnLike toggleDisLike={this.toggleDislike} disLiked={this.state.isDisliked}></UnLike>
        </div>
      </div>
    )
  }
}