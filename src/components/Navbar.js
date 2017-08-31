import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Divider, Grid } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogoutClick = (e, { name }) => {

  }


  render() {
    return (
      <div>
        <Divider hidden />
          <Grid columns={2} container>
            <Grid.Column width={16} textAlign={"right"} >
              <NavLink className="react-navlink" to="/">
                Home
              </NavLink>
            </Grid.Column>
          </Grid>
      </div>
    )
  }
}
