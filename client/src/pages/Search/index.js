import React, { Component } from "react";
import API from "../../utils/API";
import style from "./style.css";
import { callbackify } from "util";
import Results from "../../components/Results";

var axios = require("axios");

require("dotenv").config();

class Search extends Component {
  // Setting our component's initial state
  state = {
    query: "",
    results: []
  };

  // // When the component mounts, load all books and save them to this.state.books
  // componentDidMount() {
  //   this.loadBooks();
  // }

  // // Loads all books  and sets them to this.state.books
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Deletes a book from the database with a given id, then reloads books from the db
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    var value = event.target.value;
    this.setState({
      query: value
    });
  };

  // replaceSpace = (query) => {
  //   if ((query.indexOf(" ")) > -1) {
  //     query = query.replace(" ", "+")
  //   };
  // };

  searchAPI = (query) => {
    axios({
      method: "GET",
      url: "https://www.googleapis.com/books/v1/volumes?q=" + query
    })
    .then( (response) => {
      console.log(response.data);
      this.setState({results: response.data.items})
    })
    .catch((error) => {
      console.log(error);
    })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  searchBooks = (event) => {
    event.preventDefault();
    var query = this.state.query;
      if ((query.indexOf(" ")) > -1) {
        query = query.replace(/\s/g, "+")
      };
      console.log("Now the search term is" + query);
    this.searchAPI(query);
  }; //I thought I may run into problems with the various parts of this method executing asyncronously, but haven't noticed any yet

  componentDidUpdate() {
    console.log(this.state)
  };

  render() {

    var results = this.state.results.map((entry) => 
      
      <Results 
      key={entry.id}
      title = {entry.volumeInfo.title}
      author={entry.volumeInfo.authors}
      description={entry.volumeInfo.description}
      link={entry.volumeInfo.infoLink}
      image={entry.volumeInfo.imageLinks.thumbnail}
      />

      )
    
    return ( 
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Google Books Search Supreme</h1>
            <p className="lead">Use the search box below to search for books from Google Books. You can also save your favorites to view later.</p>
          </div>
        </div>
        <div className="book-search container" style={style}>
        <form >
          <div className="form-group">
            <label htmlFor="search-bar">Search</label>
              <input type="text" className="form-control" id="search-bar" placeholder="Enter book by title here" onChange={this.handleInputChange} />
          </div>
        </form>
        <button type="button" className="btn btn-primary book-search-btn" style={style} onClick={this.searchBooks}>
            Submit
        </button>
      </div>
      <br />
      <div>
      <h1>Results</h1>
      {results}
      </div>
    </div>
    );
  }
}

export default Search;
