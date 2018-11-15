import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPoint, subtractPoint } from '../reducers/GamesReducer'

import GamesPlayed from './GamesPlayed'

class GameDetailPage extends Component {
  getGame() {
    const id = this.props.match.params.id
    const team1Id = this.props.match.params.team1Id
    const team2Id = this.props.match.params.team2Id

    let game = undefined;
    if (id) {
      game = this.findGameByGameId(id)
    } else if (team1Id && team2Id) {
      game = this.findGameByTeamIds(team1Id, team2Id)
    }
    return game
  }

  findGameByGameId(id) {
    const game = this.props.games.reduce((found, game) => {
      if (found) {
        return found
      }
      if (game.id == id) {
        return game
      }
      return false
    }, false)
    return game
  }

  findGameByTeamIds(oneTeamId, otherTeamId) {
    const game = this.props.games.reduce((found, game) => {
      if (found) {
        return found
      }

      let isMatch = game.team1.id == oneTeamId && game.team2.id == otherTeamId
      isMatch = isMatch || game.team1.id == otherTeamId && game.team2.id == oneTeamId
      if (isMatch) {
        return game
      }

      return false
    }, false)
    return game
  }

  render() {
    const game = this.getGame()
    return <div id="game-detail">
  
      <GamesPlayed />

      <h1>{game.team1.name} {' vs '} {game.team2.name}</h1>
      <h3>{game.team1.name}{': '}{game.team1.points}</h3>
      <p>
        <button onClick={() => this.props.subtractPoint(game, game.team1)}>
          subtract point
                </button>
        <button onClick={() => this.props.addPoint(game, game.team1)}>
          add point
                </button>
      </p>
      <h3>{game.team2.name}{': '}{game.team2.points}</h3>
      <p>
        <button onClick={() => this.props.subtractPoint(game, game.team2)}>
          subtract point
                </button>
        <button onClick={() => this.props.addPoint(game, game.team2)}>
          add point
                </button>
      </p>
    </div>
  }
}

function mapStateToProps(state) {
  const games = state.topLevelGamesStoreSpace.games
  return {
    games
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPoint: (game, team) => {
      dispatch(addPoint(game, team))
    },
    subtractPoint: (game, team) => {
      dispatch(subtractPoint(game, team))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetailPage)
