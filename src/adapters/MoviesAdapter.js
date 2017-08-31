const baseURL="http://does-it-bechdel-api/api/v1/movies"

export default class MoviesAdapter {
  static index(){
    return (
      fetch(baseURL)
        .then(response => response.json())
      )
  }

  static show(id){
    return (
      fetch(`${baseURL}/${id}`)
        .then(response => response.json())
    )
  }

}
