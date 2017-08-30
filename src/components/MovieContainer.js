import React from 'react'
import MoviesAdapter from '../adapters/MoviesAdapter'
import { Grid , Divider, Table } from 'semantic-ui-react'
import MovieInfo from './MovieInfo'
import DirectorInfo from './DirectorInfo'
import { Link } from 'react-router-dom'

export default class MovieContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      movie: {},
      actors: [],
      director: {}
    }
  }; // end constructor

  componentDidMount(){
    console.log('Movie Container mounted!')
    const id = this.props.match.params.id
    console.log(id)
    MoviesAdapter.show(id)
      .then(json => this.setState({
        movie: json.movie,
        actors: json.actors,
        director: json.director
      }, ()=>{console.log(this.state)}))
  }

  render(){
    const actors = this.state.actors.map((actor) => {
      return (
        <Table.Row>
          <Table.Cell>
            <Link to={`/actors/${actor.id}`}>{actor.name}</Link>
          </Table.Cell>
        </Table.Row>
      )
    })

    return (
      <div>
        <Grid container={true} centered columns={3}>
          <Grid.Column textAlign={"center"} width={4}>
            <Divider hidden section/>
            <MovieInfo movie={this.state.movie} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Divider hidden section/>
            <Divider hidden section/>
            <Divider hidden section/>
            <div>
              <h3>Director(s): <Link className={"link"} to={`/directors/${this.state.director.id}`} >{this.state.director.name}</Link></h3>
              <br/>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.Cell content={"Actors"} />
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {actors}
                </Table.Body>
              </Table>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  } // end render

}
