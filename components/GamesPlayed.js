import React, { Component } from 'react'
import { connect } from 'react-redux'

class GamesPlayed extends Component {
  constructor(props) {
    super(props)
    this.tallyStanding = this.tallyStanding.bind(this)
  }

  tallyStanding(team) {
    let wins = 0
    let ties = 0
    let losses = 0

    this.props.games.forEach(game => {
      if (game.team1.id == team.id || game.team2.id == team.id) {
        if (game.team1.points === game.team2.points) {
          ties++
        } else if (game.team1.id == team.id) {
          if (game.team1.points > game.team2.points) {
            wins++
          } else {
            losses++
          }
        } else if (game.team2.id == team.id) {
          if (game.team2.points > game.team1.points) {
            wins++
          } else {
            losses++
          }
        }
      }
    })

    wins /= 2
    ties /= 2
    losses /= 2

    return { team, wins, ties, losses }
  }

  compareStandings(standing1, standing2) {
    // compare wins
    if (standing1.wins > standing2.wins) {
      return -1
    } else if (standing2.wins > standing1.wins) {
      return 1
      // compare ties
    } else if (standing1.ties > standing2.ties) {
      return -1
    } else if (standing2.ties > standing1.ties) {
      return 1
      // compare losses
    } else if (standing1.losses < standing2.losses) {
      return -1
    } else if (standing2.losses < standing1.losses) {
      return 1
      // these teams have equal standing
    } else {
      return 0
    }
  }

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
    const standings = this.props.teams.map(this.tallyStanding)
    standings.sort(this.compareStandings)

    console.log('standings', standings)

    return <div id="games-played">
      <h1>Games Played</h1>
      <table border="1">
        <tbody>
          <tr>
            <th>WTL</th>
            <th>N</th>
            <th>vs</th>
            {this.props.teams.map((_, index) => {
              return <th key={index}>{index + 1}</th>
            })}
          </tr>
          {this.props.teams.map((team, index1) => {
            return <tr key={index1}>
              <th>
                {standings[index1].wins}{'-'}
                {standings[index1].ties}{'-'}
                {standings[index1].losses}
              </th>

              <th>
                {standings[index1].wins + standings[index1].ties + standings[index1].losses}
              </th>

              <th className="team-name-column">{index1 + 1}{': '}{team.name.substr(0, 21)}</th>

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