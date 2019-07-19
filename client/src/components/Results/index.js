import React from "react";
import style from "./style.css"

function Results(props) {

    return (
        <div className="results-div" style={style}>
            <div className="book-buttons">
                <a href={props.link} target="_blank"><button type="button" className="btn btn-secondary">View</button></a>{"\u00a0"}
                <button type="button" className="btn btn-secondary" style={style} onClick={() => props.saveBook(props.title, props.author, props.image, props.description, props.link)}>Save</button>
            </div>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
            <br />
            <img src={props.image} className="book-image" style={style}/>
            <br />
            <p>{props.description}</p>
            <br />
        </div>
    )

};

export default Results;