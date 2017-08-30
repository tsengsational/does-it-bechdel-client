import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import { Route } from 'react-router-dom'
import MovieContainer from './components/MovieContainer'
import ActorContainer from './components/ActorContainer'
import DirectorContainer from './components/DirectorContainer'
import VideoBackground from './components/VideoBackground'

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchInput: '',
      movies: [],
      actor: [],
      directors: []
    }
  }

  render() {
    return (
      <div className="App">
        <div style={{backgroundColor: 'gray', opacity: .5, width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1,}}></div>
        <VideoBackground />
        <Route exact path='/' render={(props)=>{
          return <Home history={props.history} />
        }}/>
        <Route exact path='/movies/:id' render={ (props) => {
          return <MovieContainer history={props.history} match={props.match} />
          }
        }
        />
        <Route exact path='/actors/:id' render={ (props) => {
          return <ActorContainer history={props.history} match={props.match} />
          }
        }
        />
        <Route exact path='/directors/:id' render={ (props) => {
          return <DirectorContainer history={props.history} match={props.match} />
          }
        }
        />
      </div>
    );
  }
}

export default App;
