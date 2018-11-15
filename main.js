import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { BASE_URL } from './config'
console.log('config:', BASE_URL)

import './style.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'

import TeamDetailPage from './components/TeamDetailPage'
import TeamCreatePage from './components/TeamCreatePage'
import TeamEditPage from './components/TeamEditPage'

import GameDetailPage from './components/GameDetailPage'
import GameCreatePage from './components/GameCreatePage'

import teamsReducer from './reducers/TeamsReducer'
import gamesReducer from './reducers/GamesReducer'

import polo0 from './img/polo0.jpg'
import polo1 from './img/polo1.jpg'
import polo2 from './img/polo2.jpg'
import polo3 from './img/polo3.jpg'
import polo4 from './img/polo4.jpg'
import polo5 from './img/polo5.jpg'
import polo6 from './img/polo6.jpg'
import polo7 from './img/polo7.jpg'
import polo8 from './img/polo8.jpg'
import polo9 from './img/polo9.jpg'
import polo10 from './img/polo10.jpg'
import polo11 from './img/polo11.jpg'

const images = [
  polo0, polo1, polo2, polo3, polo4, polo5, polo6, polo7, polo8, polo9, polo10, polo11
]
const randomImageIndex = Math.floor(Math.random() * images.length)
document.body.style.backgroundImage = "url(" + images[randomImageIndex] + ")"

const reducer = combineReducers({
  topLevelTeamsStoreSpace: teamsReducer,
  topLevelGamesStoreSpace: gamesReducer,
})

const store = createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div id="app-container">
        <Navbar />
        <Route exact path={BASE_URL} component={Homepage} />
        <Route exact path={BASE_URL + 'teams/create'} component={TeamCreatePage} />
        <Route path={BASE_URL + 'teams/id/:id'} component={TeamDetailPage} />
        <Route path={BASE_URL + 'teams/edit/:id'} component={TeamEditPage} />
        <Route path={BASE_URL + 'games/id/:id'} component={GameDetailPage} />
        <Route path={BASE_URL + 'games/create/'} component={GameCreatePage} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))