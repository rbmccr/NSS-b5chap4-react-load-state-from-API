import React, { Component } from "react"
import NavBar from "./../nav/NavBar"

class SearchResults extends Component {

  state = {
    animals: [],
    employees: [],
    owners: []
  }

  handleInput = input => {
    const newState = {}

    return fetch(`http://localhost:5002/animals?q=${input}`)
    .then(r => r.json())
    .then(animals => newState.animals = animals)
    .then(() => fetch(`http://localhost:5002/employees?q=${input}`)
      .then(r => r.json()))
    .then(employees => newState.employees = employees)
    .then(() => fetch(`http://localhost:5002/owners?q=${input}`)
      .then(r => r.json()))
    .then(owners => newState.owners = owners)
    .then(() => this.setState(newState))
  }

  render() {
    return (<NavBar handleInput={this.handleInput}/>)
  }
}

export default SearchResults