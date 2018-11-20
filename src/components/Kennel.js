import React, { Component } from "react"
// import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./../Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import SearchResults from "./search/searchResults"

class Kennel extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        {/* <SearchResults /> */}
        <ApplicationViews />
      </React.Fragment>
    )
  }
}

export default Kennel