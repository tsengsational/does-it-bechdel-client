import React from 'react'
import DirectorsAdapter from '../adapters/DirectorsAdapter'


export default class DirectorInfo extends React.Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    const id = this.state.director.id
    DirectorsAdapter.show(id)
      .then(json => this.setState({
        movies: json.movies
      }))
  }

  render(){
    return(<div>
      </div>)
  }

}
