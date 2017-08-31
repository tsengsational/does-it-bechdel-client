const baseURL="http://does-it-bechdel-api/api/v1/"

export default class StaticAdapter {
  static search(){
    return (
      fetch(`${baseURL}search`)
        .then(response => response.json())
      )
  }

}
