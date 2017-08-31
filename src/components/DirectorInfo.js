import React from 'react'
import { Table } from 'semantic-ui-react'
import DirectorsAdapter from '../adapters/DirectorsAdapter'
import { Link } from 'react-router-dom'

export default class DirectorInfo extends React.Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    const id = this.props.director.id
    DirectorsAdapter.show(id)
      .then(json => this.setState({
        movies: json.movies
      }))
  }

  render(){
    return(<div></div>)
  }

}
