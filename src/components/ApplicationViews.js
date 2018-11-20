import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import SearchResults from "./search/searchResults"
import NavBar from './nav/NavBar'

class ApplicationViews extends Component {

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/animals")
      .then(r => r.json())
      .then(animals => newState.animals = animals)
      .then(() => fetch("http://localhost:5002/employees")
        .then(r => r.json()))
      .then(employees => newState.employees = employees)
      .then(() => fetch("http://localhost:5002/locations")
        .then(r => r.json()))
      .then(locations => newState.locations = locations)
      .then(() => fetch("http://localhost:5002/owners")
        .then(r => r.json()))
      .then(owners => newState.owners = owners)
      .then(() => fetch("http://localhost:5002/animalsOwned")
        .then(r => r.json()))
      .then(ao => newState.animalsOwned = ao)
      .then(() => this.setState(newState))
  }

  state = {
    owners: [],
    locations: [],
    animals: [],
    employees: [],
    animalsOwned: [],
    searchResults: []
  }

  searchFunction = (e) => {
    const input = e.target.value
    if (e.keyCode === 13) {
      const newState = {
        searchResults: []
      }

      return fetch(`http://localhost:5002/animals?q=${input}`)
        .then(r => r.json())
        .then(animals => animals.forEach(animal => {
          newState.searchResults.push(animal)
        }))
        .then(() => fetch(`http://localhost:5002/employees?q=${input}`)
          .then(r => r.json()))
          .then(employees => employees.forEach(employee => {
            newState.searchResults.push(employee)
          }))
        .then(() => fetch(`http://localhost:5002/owners?q=${input}`)
          .then(r => r.json()))
          .then(owners => owners.forEach(owner => {
            newState.searchResults.push(owner)
          }))
        .then(() =>
          this.setState(newState))
    }

  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <React.Fragment>
            <NavBar />
            <LocationList locations={this.state.locations} />
          </React.Fragment>
        }} />
        <Route path="/animals" render={(props) => {
          return <React.Fragment>
            <NavBar />
            <AnimalList animals={this.state.animals} owners={this.state.owners} animalsOwned={this.state.animalsOwned} />
          </React.Fragment>
        }} />
        <Route path="/employees" render={(props) => {
          return <React.Fragment>
            <NavBar />
            <EmployeeList employees={this.state.employees} />
          </React.Fragment>
        }} />
        <Route path="/owners" render={(props) => {
          return <React.Fragment>
            <NavBar />
            <OwnerList owners={this.state.owners} />
          </React.Fragment>
        }} />
        <Route exact path="/search" render={(props) => {
          return <React.Fragment>
            <NavBar searchFunction={this.searchFunction} />
            <SearchResults SearchResults={this.state.searchResults} />
          </React.Fragment>
        }} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews