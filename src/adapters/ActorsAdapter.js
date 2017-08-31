const baseURL="http://localhost:3000/api/v1/actors"

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
