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
                    {savedStatus ? "Saved " : "Save"}
                    {savedStatus ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                    </svg> : null}
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