const baseURL="http://does-it-bechdel-api/api/v1/actors"

export default class ActorsAdapter {
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
