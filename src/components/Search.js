import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from "react-bootstrap";
import { API_KEY } from "../components/Key";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: " ",
    };
  }
  search() {
    console.log("Book: ", this.state.query);
    let url = `https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=yourAPIKey`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  }
  render() {
    return (
      <div>
        <Form inline>
          <FormGroup>
            <ControlLabel>Search</ControlLabel>
            <FormControl
              type="text"
              placeholder="Search any book"
              onChange={(event) => this.setState({ query: event.target.value })}
            ></FormControl>
            <Button bsStyle="success" onClick={() => this.search()}>
              Search
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default Search;
