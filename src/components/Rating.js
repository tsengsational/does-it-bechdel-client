import React from 'react';

const Rating = (props) => {
  let movieScores = props.movies.map(movie => movie.movie.binary)
  let passCount = 0;
  for(var i = 0; i < movieScores.length; ++i){
    if(movieScores[i] === "PASS"){
      passCount++;
    }
  }
  let rating = (passCount/movieScores.length) * 100
  return (
    <div className="react-rating"><h1>{rating}%</h1></div>
  )
}

export default Rating
