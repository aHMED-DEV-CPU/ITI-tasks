import    "./Like.css"
import React, { Component } from 'react'

export default class Like extends Component {

  render() {
    return (
<button className={`like ${this.props.Like && 'like-active'}`} onClick={this.props.toggleLike}><i className="fa-solid fa-thumbs-up "></i> </button>
    )
  }
}
