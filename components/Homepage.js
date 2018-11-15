import React, { Component, Fragment } from 'react'
import TeamsList from './TeamsList'
import GamesList from './GamesList'
import GamesPlayed from './GamesPlayed'

export default class Homepage extends Component {
  render() {
    return <Fragment>
      <GamesPlayed />
      <TeamsList />
      <GamesList />
    </Fragment>
  }
}