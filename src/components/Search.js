import React from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import StaticAdapter from '../adapters/StaticAdapter'
import Autosuggest from 'react-autosuggest'

let options = []

export default class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      value: '',
      suggestions: []
    };
  }; //end constructor

  componentDidMount(){
    StaticAdapter.search()
      .then(json => options = json)
  } // end componentDidMount

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : options.filter(suggestion =>
      suggestion.value.toLowerCase().slice(0, inputLength) === inputValue
    );
  }; //end getSuggestions

  getSuggestionValue = (suggestion) => suggestion.value;

  renderSuggestion = (suggestion) => (
    <div>
    {suggestion.value}
    </div>
  );

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

 onSuggestionsFetchRequested = ({ value }) => {
   this.setState({
     suggestions: this.getSuggestions(value)
   });
 };

 onSuggestionsClearRequested = () => {
   this.setState({
     suggestions: []
   });
 };

 handleClick = (event) => {
   event.preventDefault()
   console.log(this.state)
   const value = this.state.value
   const match = options.find((suggestion) => suggestion.value === value)
   switch (match.category) {
     case 'movie':
       const movieID = match.id
        this.props.history.push(`/movies/${movieID}`)
        break;
     case 'actor':
       const actorID = match.id
       this.props.history.push(`/actors/${actorID}`)
       break;
     case 'director':
       const directorID = match.id
       this.props.history.push(`/directors/${directorID}`)
       break;
     default:
      break;
   }
 }

 render() {
   const { value, suggestions } = this.state;

   const inputProps = {
     placeholder: 'Search for a Movie, Director, or Actor',
     value,
     onChange: this.onChange
   };

   return (

      <Form>
      <Grid columns={2}>
        <Grid.Column width={12}>
         <Autosuggest
           suggestions={suggestions}
           onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
           onSuggestionsClearRequested={this.onSuggestionsClearRequested}
           getSuggestionValue={this.getSuggestionValue}
           renderSuggestion={this.renderSuggestion}
           inputProps={inputProps}
         />
         </Grid.Column>
         <Grid.Column width={4}>
         <Button onClick={this.handleClick} >Search</Button>
         </Grid.Column>
       </Grid>
       </Form>

   );
 } // end render

}
