import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../config'

export default class Navbar extends Component {
  render() {
    return <p>
      <Link to={BASE_URL} className="unsubtle">Home</Link>{' '}
      <Link to={BASE_URL + 'teams/create'} className="unsubtle">Create Team</Link>{' '}
      <Link to={BASE_URL + 'games/create'} className="unsubtle">Create Game</Link>
    </p>
  }
}
