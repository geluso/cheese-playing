import TEAMS from './Teams'

const GAMES = [
  // 1 Mucho
  {
    team1: { id: 1, points: 5 },
    team2: { id: 7, points: 2 }
  },
  {
    team1: { id: 1, points: 6 },
    team2: { id: 2, points: 1 }
  },
  {
    team1: { id: 1, points: 8 },
    team2: { id: 4, points: 1 }
  },
  {
    team1: { id: 1, points: 4 },
    team2: { id: 8, points: 0 }
  },
  // 2 LCU
  {
    team1: { id: 2, points: 6 },
    team2: { id: 3, points: 2 }
  },
  {
    team1: { id: 2, points: 3 },
    team2: { id: 4, points: 0 }
  },
  {
    team1: { id: 2, points: 6 },
    team2: { id: 8, points: 4 }
  },
  {
    team1: { id: 2, points: 7 },
    team2: { id: 5, points: 2 }
  },
  // 3 Retirees
  {
    team1: { id: 3, points: 2 },
    team2: { id: 6, points: 1 }
  },
  {
    team1: { id: 3, points: 4 },
    team2: { id: 7, points: 6 }
  },
  {
    team1: { id: 3, points: 7 },
    team2: { id: 9, points: 1 }
  },
  // 4 scouts honor
  {
    team1: { id: 4, points: 4 },
    team2: { id: 6, points: 0 }
  },
  {
    team1: { id: 4, points: 3 },
    team2: { id: 8, points: 1 }
  },
  {
    team1: { id: 4, points: 5 },
    team2: { id: 7, points: 4 }
  },
  // 5 McPoyles
  {
    team1: { id: 5, points: 2 },
    team2: { id: 8, points: 1 }
  },
  {
    team1: { id: 5, points: 3 },
    team2: { id: 9, points: 2 }
  },
  {
    team1: { id: 5, points: 3 },
    team2: { id: 6, points: 3 }
  },
  {
    team1: { id: 5, points: 3 },
    team2: { id: 7, points: 3 }
  },
  // 6 Zissou
  {
    team1: { id: 6, points: 3 },
    team2: { id: 9, points: 2 }
  },
  // 7 pumpers
  {
    team1: { id: 7, points: 2 },
    team2: { id: 9, points: 0 }
  },
  // 8 beer senator
  // 9 bobs burglars
  // 10 instamix
  {
    team1: { id: 10, points: 0 },
    team2: { id: 1, points: 5 }
  },
  {
    team1: { id: 10, points: 0 },
    team2: { id: 8, points: 5 }
  },
  {
    team1: { id: 10, points: 0 },
    team2: { id: 9, points: 5 }
  },
  {
    team1: { id: 10, points: 0 },
    team2: { id: 6, points: 5 }
  },
  {
    team1: { id: 10, points: 0 },
    team2: { id: 3, points: 5 }
  },
]

function getTeamName(id) {
  return TEAMS.filter(team => team.id === id)[0].name
}

for (let i = 0; i < GAMES.length; i++) {
  const game = GAMES[i]
  game.id = i
  game.team1.name = getTeamName(game.team1.id)
  game.team2.name = getTeamName(game.team2.id)
}

export default GAMES