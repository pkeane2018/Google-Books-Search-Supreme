import React from "react";
import style from "./style.css"

function Results(props) {

    return (
        <div className="container results-div" style={style}>
            <p> <a href={props.link} target="_blank">{props.title}</a></p>
            <p>{props.author}</p>
            <img src={props.image} />
            <p>{props.description}</p>
            <br />
        </div>
    )

};

export default Results;