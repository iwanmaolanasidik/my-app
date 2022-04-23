import React from "react";
import pol from "./../../img/pol.jpg";

const YoutubeComponent = (props) => {
    return(
        <div className="card mx-auto" style={{width: "18rem"}}>
            <img src={pol} alt="Thumbnail" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
    )
}

// nilai props default
YoutubeComponent.defaultProps={
    title : "No Name",
    desc : "No Description"
}

export default YoutubeComponent;