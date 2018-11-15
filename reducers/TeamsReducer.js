import { CREATE_TEAM, EDIT_TEAM } from './TeamsActions'
import TEAMS from './Teams'

function initialState() {
  return {
    teams: TEAMS
  }
}

const teamsReducer = (state, action) => {
  if (state === undefined) {
    return initialState()
  }

  switch (action.type) {
    case CREATE_TEAM: {
      const teams = [...state.teams, action.team]
      return { teams }
    }

    case EDIT_TEAM: {
      console.log('action', action.team)
      let teams = [...state.teams]
      let newTeams = teams.map(team => {
        // find the team that matches the id of the team we're updating
        // replace the current team info with the new team info
        // return every other non-matching team just as they were
        if (team.id == action.team.id) {
          return action.team
        } else {
          return team
        }
      })
      return { teams: newTeams }
    }
    default: {
      return state
    }
  }
}

export default teamsReducer
