
import "./UnLike.css"
import React, { Component } from 'react'

export default class UnLike extends Component {
  render() {
    return (
    <button className={`unLike ${ this.props.disLiked && 'unLike-active'}`}
    onClick={this.props.toggleDisLike}><i className="fa-solid fa-thumbs-down "></i> </button>
    
  )
  }
}

