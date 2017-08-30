const baseURL="http://localhost:3000/api/v1/movies"

export default class MoviesAdapter {
  static index(){
    return (
      fetch(baseURL)
        .then(response => response.json())
      )
  }

  static show(){
    return (
      fetch(`${baseURL}/:id`)
        .then(response => response.jason())
    )
  }

}
