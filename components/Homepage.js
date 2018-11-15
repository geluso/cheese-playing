import React, { Component, Fragment } from 'react'
import TeamsList from './TeamsList'
import GamesList from './GamesList'
import Standings from './Standings'
import GamesPlayed from './GamesPlayed'

export default class Homepage extends Component {
  render() {
    return <Fragment>
      <GamesPlayed />
      <Standings />
      <TeamsList />
      <GamesList />
    </Fragment>
  }
}