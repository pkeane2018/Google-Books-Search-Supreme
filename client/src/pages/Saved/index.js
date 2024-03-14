import React, { Component } from "react";
import API from "../../utils/API";
import Favorites from "../../components/Favorites";
class Saved extends Component {

    state = {
        books: []
    }

    displayBooks = () => {

        API.getBooks()
        .then(res => 
            this.setState({books: res.data})
        )
        .catch(err => console.log(err))
    };

    componentDidMount() {
        this.displayBooks();
    }

    deleteBook = (id) => {
        API.deleteBook(id).
        then( () => this.displayBooks())
    }

    render() {

        var favoriteBooks = this.state.books.map((entry) => 
        
        <Favorites 
            key={entry._id}
            id ={entry._id}
            title = {entry.title ? entry.title :null}
            author={entry.authors ? entry.authors : null}
            description={entry.description ? entry.description: null}
            link={entry.link ? entry.link: null}
            image={entry.image ? entry.image : null}
            deleteBook ={this.deleteBook}
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
            <div>
                <h1>Saved Books</h1>
                {favoriteBooks}
            </div>
            </div>
        )

    }
};

export default Saved;