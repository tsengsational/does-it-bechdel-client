const baseURL="http://localhost:3000/api/v1/"

export default class StaticAdapter {
  static search(){
    return (
      fetch(`${baseURL}search`)
        .then(response => response.json())
      )
  }

}
