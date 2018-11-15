import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../config'

export default class Navbar extends Component {
  render() {
    return <p>
      <Link to={BASE_URL}>Home</Link>{' '}
      <Link to={BASE_URL + 'teams/create'}>Create Team</Link>{' '}
      <Link to={BASE_URL + 'games/create'}>Create Game</Link>
    </p>
  }
}
