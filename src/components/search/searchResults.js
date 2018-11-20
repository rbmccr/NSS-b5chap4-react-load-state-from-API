import React, { Component } from "react"
// import NavBar from "./../nav/NavBar"

class SearchResults extends Component {

  render() {
    return (
      <section className="list">
        {
          this.props.SearchResults.map(item =>
            <div key={item.id}>
              {item.name}
            </div>
          )
        }
      </section>
    )
  }
}

export default SearchResults