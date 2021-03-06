import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      name: "",
      address: "",
    },
    isUpdate: false,
  };

  getPostApi = () => {
    axios.get("http://127.0.0.1:8000/api/student").then((res) => {
      // console.log(res.data);
      this.setState({
        post: res.data,
      });
    });
  };

  postDataToAPI = () => {
    axios
      .post(`http://127.0.0.1:8000/api/student`, this.state.formBlogPost)
      .then((res) => {
        this.setState({
          formBlogPost: {
            name: "",
            address: "",
          },
        });
        this.getPostApi();
        console.log(res);
      });
  };

  handleRemove = (data) => {
    axios.delete(`http://127.0.0.1:8000/api/student/${data}`).then((res) => {
      console.log(res);
      this.getPostApi();
    });
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  putDataToAPI = () => {
    axios
      .put(
        `http://127.0.0.1:8000/api/student/${this.state.formBlogPost.student_id}`,
        this.state.formBlogPost
      )
      .then((res) => {
        console.log(res);
        this.getPostApi();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            name: "",
            address: "",
          },
        });
      });
  };

  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState(
      {
        formBlogPost: formBlogPostNew,
      },
      () => {
        // console.log(this.state.formBlogPost);
      }
    );
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
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
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.handleFormChange}
              value={this.state.formBlogPost.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="5"
              className="form-control"
              onChange={this.handleFormChange}
              value={this.state.formBlogPost.address}
            ></textarea>
          </div>
          <div className="form-group mt-2 mb-5 text-end">
            <button className="btn btn-primary" onClick={this.handleSubmit}>
              Simpan
            </button>
          </div>

          {this.state.post.map((post) => {
            return (
              <Post
                key={post.student_id}
                data={post}
                remove={this.handleRemove}
                update={this.handleUpdate}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BlogPost;
