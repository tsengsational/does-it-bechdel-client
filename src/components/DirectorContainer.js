import React from 'react'
import DirectorsAdapter from '../adapters/DirectorsAdapter'
import { Grid , Divider, Table, Segment } from 'semantic-ui-react'
import Director from './Director'
import { Link } from 'react-router-dom'
import Rating from './Rating'

export default class ActorContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      director: {},
      movies: []
    }
  }; // end constructor

  componentDidMount(){
    console.log('Director Container mounted!')
    const id = this.props.match.params.id
    console.log(id)
    DirectorsAdapter.show(id)
      .then(json => this.setState({
        director: json.director,
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
            <Director director={this.state.director} />
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
