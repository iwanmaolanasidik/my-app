import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };

  getPostApi = () => {
    axios.get("http://localhost:3004/posts").then((res) => {
      this.setState({
        post: res.data,
      });
    });
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostApi();
    });
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });

    // AXIOS
    this.getPostApi();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <p>BlogPost Component</p>
          <hr />
          {this.state.post.map((post) => {
            return (
              <Post key={post.id} data={post} remove={this.handleRemove} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BlogPost;
