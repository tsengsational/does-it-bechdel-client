import React from 'react';
import { Grid, Divider } from 'semantic-ui-react'
import Search from './Search'

export default class Home extends React.Component {

  render(){
    return(
    <div>
      <Divider hidden section/>
      <Divider hidden section/>
      <h1 className="cover-heading ">Does it Bechdel?</h1>
      <Divider hidden section/>
      <Grid>
        <Grid.Row centered={true} >
          <Grid.Column width={8}>
            <p className="titillium-white">The Bechdel Test asks whether a work of fiction features at least two women who talk to each other about something other than a man. Over half of Hollywood films fail this test.</p>
            <Search history={this.props.history} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )
  }
}
