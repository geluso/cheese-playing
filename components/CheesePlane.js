import React, { Component } from 'react'
import cheeseplane from '../img/cheese-playne.png'

export default class CheesePlane extends Component {
  render() {
    return <div id="logo">
      <img src={cheeseplane} style={{ width: '40px' }} />
      <span id="logo-title">Cheese Plane</span>{' '}
      <span id="logo-catch">- for cutting swiss tournaments</span>
    </div>
  }
}
