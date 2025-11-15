class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName
    this.lastName = lastName
  }
  
  getFullName(){
    return this.firstName+" "+this.lastName
  }
  
}

const result = new Dinglemouse("Kukus","mantan")
console.log(result)