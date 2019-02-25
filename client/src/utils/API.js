import axios from "axios";

export default {

  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  getSavedBooks: function () {
    return axios.get("/api/books/saved")
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/saved" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/saved/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books/saved", bookData);
  }
};