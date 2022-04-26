import React from "react";
import "./Post.css";
import cocacola from "./../../img/coca.jpg";

const Post = (props) => {
  return (
    <div className="col-md-3">
      <div className="card" style={{ width: "100%" }}>
        <img className="card-img-top" src={cocacola} alt="Card image cap" />
        <div className="card-body">
          <p className="card-title">
            <b>{props.data.name}</b>
          </p>
          <p className="card-text">{props.data.address}</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => props.remove(props.data.student_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
