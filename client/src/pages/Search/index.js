import React, { Component } from "react";
import API from "../../utils/API";
import style from "./style.css";
import Results from "../../components/Results";

var axios = require("axios");

class Search extends Component {
  
  state = {
    query: "",
    results: []
  };

  handleInputChange = event => {
    var value = event.target.value;
    this.setState({
      query: value
    });
  };

  searchAPI = (query) => {
    axios({
      method: "GET",
      url: "https://www.googleapis.com/books/v1/volumes?q=" + query
    })
    .then( (response) => {
      this.setState({results: response.data.items})
    })
    .then( () => {
      this.updateAuthors();
    })
    .then(() => {
      this.setState({query: " "})
    })
    .catch((error) => {
      console.log(error);
    })
  };

  updateAuthors = () => {
    var results = this.state.results;
    for (var i = 0; i < results.length; i++) {
      if ((results[i].volumeInfo.authors.length) > 1) {
        var author = results[i].volumeInfo.authors.join(", ");
        results[i].volumeInfo.authors = author; 
      }
    };
    this.setState({results: results});
  };

  searchBooks = (event) => {
    event.preventDefault();
    var query = this.state.query;
      if ((query.indexOf(" ")) > -1) {
        query = query.replace(/\s/g, "+")
      };
    this.searchAPI(query)
  }

  saveBook = (bookTitle, bookAuthor, bookImage, bookDescription, bookLink) => {
    API.saveBook({
      title : bookTitle,
      author: bookAuthor,
      image: bookImage,
      description: bookDescription,
      link: bookLink
    })
    .catch(err => console.log(err));
  }

  render() {

    var updatedResults = this.state.results.map((entry) => 
      
      <Results 
        key={entry.id}
        id ={entry.id}
        title = {entry.volumeInfo.title ? entry.volumeInfo.title :null}
        author={entry.volumeInfo.authors ? entry.volumeInfo.authors : null}
        description={entry.volumeInfo.description ? entry.volumeInfo.description: null}
        link={entry.volumeInfo.infoLink ? entry.volumeInfo.infoLink: null}
        image={entry.volumeInfo.imageLinks ? entry.volumeInfo.imageLinks.thumbnail : null}
        saveBook ={this.saveBook}
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
              <input type="text" className="form-control" id="search-bar" placeholder="Enter book by title here" value={this.state.query} onChange={this.handleInputChange} />
          </div>
        </form>
        <button type="button" className="btn btn-primary book-search-btn" style={style} onClick={this.searchBooks}>
            Submit
        </button>
      </div>
      <br />
      <div>
      <h1>{this.state.results.length > 0 ? "Results" : null}</h1>
      {updatedResults}
      </div>
    </div>
    );
  }
}

export default Search;
