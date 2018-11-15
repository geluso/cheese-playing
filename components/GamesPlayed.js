import React, { Component } from 'react'
import { connect } from 'react-redux'

class GamesPlayed extends Component {
  gamesPlayed() {
    const gamesPlayed = {}
    for (const team of this.props.teams) {
      gamesPlayed[team.name] = {}
    }

    for (const game of this.props.games) {
      gamesPlayed[game.team1.name][game.team2.name] = game.team1.points + '-' + game.team2.points
      gamesPlayed[game.team2.name][game.team1.name] = game.team2.points + '-' + game.team1.points
    }

    return gamesPlayed
  }

  render() {
    const gamesPlayed = this.gamesPlayed()

    return <div id="games-played">
      <h1>Games Played</h1>
      <table border="1">
        <tbody>
          <tr>
            <th>vs</th>
            {this.props.teams.map((_, index) => {
              return <th key={index}>{index + 1}</th>
            })}
          </tr>
          {this.props.teams.map((team, index1) => {
            return <tr key={index1}>
              <th className="team-name-column">{index1 + 1}{': '}{team.name}</th>
              {this.props.teams.map((otherTeam, i2) => {
                if (team === otherTeam) {
                  return <td key={team + otherTeam} className="unplayed">x-x</td>
                }
                const score = gamesPlayed[team.name][otherTeam.name]
                const teamScores = score && score.split('-')

                let className = 'tie'
                if (!score) {
                  className = 'unplayed'
                } else if (teamScores[0] > teamScores[1]) {
                  className = 'win'
                } else if (teamScores[0] < teamScores[1]) {
                  className = 'loss'
                }

                return <td key={i2} className={className}>
                  {score}
                </td>
              })}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    games: state.topLevelGamesStoreSpace.games,
    teams: state.topLevelTeamsStoreSpace.teams
  }
}

function mapDispatchToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesPlayed)