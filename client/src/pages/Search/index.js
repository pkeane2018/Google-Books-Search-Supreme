import React, { Component } from "react";
import API from "../../utils/API";
import style from "./style.css";

class Search extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return ( 
      <div>
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-4">Google Books Search Supreme</h1>
            <p class="lead">Use the search box below to search for books from Google Books. You can also save your favorites to view later.</p>
          </div>
        </div>
        <div className="book-search container" style={style}>
        <form >
          <div className="form-group">
            <label for="search-bar">Search</label>
              <input type="text" className="form-control" id="search-bar" placeholder="Enter book by title here" />
          </div>
        </form>
        <button type="button" className="btn btn-primary book-search-btn" style={style}>
            Search
        </button>
      </div>
      </div>
    );
  }
}

export default Search;
