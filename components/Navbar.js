import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return <p>
      <Link to="/cheese-playne/">Home</Link>{' '}
      <Link to="/cheese-playne/teams/create">Create Team</Link>{' '}
      <Link to="/cheese-playne/games/create">Create Game</Link>
    </p>
  }
}
