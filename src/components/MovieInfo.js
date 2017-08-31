import React from 'react';
import { Segment, Image } from 'semantic-ui-react'

const MovieInfo = (props) => {
  const color = props.movie.binary === "PASS" ? "green" : "red"
  let detail = ""
  switch (props.movie.detail) {
    case "notalk":
      detail = "Women characters don't talk to each other in this film.";
      break;
    case "ok":
      detail = `This film passes the Bechdel Test!`;
      break;
    case "nowomen":
      detail = "There are no women in this film."
      break;
    case "dubious":
      detail = "Dubious.";
      break;
    case "men":
      detail = "Women characters speak to each other, but only about men.";
      break;
    default:
      detail = ''
      break;
  }

  return(
    <div>
      <h1>{props.movie.title}</h1>
      <br/>
      <Image src={props.movie.poster} />
      <br/>
      <Segment inverted color={color} >{props.movie.binary}</Segment>
      <p>{detail}</p>
    </div>
  )
}

export default MovieInfo
