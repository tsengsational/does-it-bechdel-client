import React from 'react'
import ActorsAdapter from '../adapters/ActorsAdapter'
import { Grid , Divider, Table, Segment } from 'semantic-ui-react'
import Actor from './Actor'
import { Link } from 'react-router-dom'
import Rating from './Rating'

export default class ActorContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      actor: {},
      movies: []
    }
  }; // end constructor

  componentDidMount(){
    console.log('Actor Container mounted!')
    const id = this.props.match.params.id
    console.log(id)
    ActorsAdapter.show(id)
      .then(json => this.setState({
        actor: json.actor,
        movies: json.movies
      }, ()=>{console.log(this.state)}))
  }

  render(){
    const movies = this.state.movies.map((movie) => {
      let color = movie.movie.binary === "PASS" ? "green" : "red"
      return (
        <Table.Row>
          <Table.Cell>
            <Link to={`/movies/${movie.movie.id}`}>{movie.movie.title}</Link>
          </Table.Cell>
          <Table.Cell>
            <Segment inverted color={color} >{movie.movie.binary}</Segment>
          </Table.Cell>
        </Table.Row>
      )
    })

    return (
      <div>
        <Grid container={true} centered columns={3}>
          <Grid.Column textAlign={"center"} width={12}>
            <Divider hidden section/>
            <Actor actor={this.state.actor} />
            <Divider hidden section/>
            <Rating movies={this.state.movies} />
            <Divider hidden section/>
            <div>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.Cell content={"Title"} />
                    <Table.Cell content={"Pass/Fail"} />
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {movies}
                </Table.Body>
              </Table>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  } // end render

}
