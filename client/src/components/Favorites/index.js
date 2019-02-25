import React from "react";
import style from "./style.css"

function Favorites(props) {

    return (
        <div className="container results-div" style={style}>
            <div className="book-buttons">
                <a href={props.link} target="_blank"><button type="button" className="btn btn-secondary">View</button></a>{"\u00a0"}
                <button type="button" className="btn btn-secondary" style={style} onClick={() => props.deleteBook(props.id)}>Delete</button>
            </div>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
            <img src={props.image} />
            <p>{props.description}</p>
            <br />
        </div>
    )

};

export default Favorites;