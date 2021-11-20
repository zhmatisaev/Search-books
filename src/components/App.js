import React, { Component } from "react";
import BookResults from "./BookResults";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <div className="jumbotron">
            <h1>Search Books</h1>
            <p>Who doesn`t love read books ???</p>
          </div>
        </div>
        <div className="row">
          <BookResults />
        </div>
      </div>
    );
  }
}
export default App;
