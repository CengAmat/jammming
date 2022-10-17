import React, { Component } from 'react'

export default class Track extends Component {
  renderAction(isRemoval){
    return <button className="Track-action">{isRemoval ? '-' : '+'}</button>
  }
  render() {
    return (
        <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button className="Track-action"><!-- + or - will go here --></button>
      </div>
    )
  }
}
