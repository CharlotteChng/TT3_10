import React, { Component } from "react";
import { Input, Button, Alert } from "antd";
import "../App.css";
import PostCards from "../components/PostCards";
import { posts } from "./PostsObj";
// import { post } from "request";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      submittedPostNotification: false,
      posts: [],
    };
    this.setPost = this.setPost.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    this.setState({ posts: posts });
  }

  setPost = (e) => {
    //Updates the state of the message
    this.setState({
      message: e.target.value,
      submittedPostNotification: false,
    });
  };

  createPost() {
    //Just sends the message to the backend
    //send api post to the backend
    this.setState({ message: "", submittedPostNotification: true });
  }

  render() {
    const { message, submittedPostNotification } = this.state;
    console.log(posts);
    var postList = this.state.posts;
    return (
      <div className="main-page">
        <div className="main-boundary">
          <div className="main-post">
            {submittedPostNotification ? (
              <Alert message="Success Text" type="success" />
            ) : (
              <></>
            )}
            <Input
              className="main-post-box"
              placeholder="Basic usage"
              maxLength={255}
              onChange={this.setPost}
              // showCount
            />
            <Button type="primary" onClick={this.createPost}>
              Post
            </Button>
            {/* <div>{message}</div> */}
            {postList.map((p, i) => {
              console.log("para", p.Post_ID);
              return <PostCards key={i} postID={p.Post_ID} />;
              // return <div key={i}>{p.Post_ID}</div>;
            })}
          </div>
        </div>

        {/* <div className="h1">this is my homepage</div> */}
      </div>
    );
  }
}
