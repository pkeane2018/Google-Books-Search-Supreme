import React, { useState } from "react";
import style from "./style.css"

function Results(props) {

    const [savedStatus, setSavedStatus] = useState(false);
    const {saveBook, title, author, image, description, link} = props;

    return (
        <div className="results-div container" style={style}>
            <div className="book-buttons">
                <a href={props.link} target="_blank"><button type="button" className="btn btn-secondary">View</button></a>{"\u00a0"}
                <button type="button" className="btn btn-secondary" style={style} onClick={() => handleClick(saveBook, savedStatus, setSavedStatus, title, author, image, description, link)}>
                    {savedStatus ? "Saved" : "Save"}
                </button>
            </div>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
            <img src={props.image} className="book-image img-thumbnail" style={style}/>
            <p>{props.description}</p>
            <br />
        </div>
    )

};

function handleClick(saveBook, savedStatus, setSavedStatus, title, author, image, description, link ) {

    if (savedStatus === false){
        saveBook(title, author, image, description, link);
        setSavedStatus(true);
    }

}

export default Results;