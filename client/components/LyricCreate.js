import React, { Component } from "react";
import { graphql } from "react-apollo";
import addLyricToSong from "../mutations/addLyricToSong";
import fetchSong from "../queries/fetchSong";

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(content) {
    this.setState({ content });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { mutate, songId } = this.props;
    const { content } = this.state;
    mutate({
      variables: {
        content,
        songId
      }
    }).then(() => this.setState({ content: "" }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Add Lyric </label>
        <input
          type="text"
          value={this.state.content}
          onChange={e => this.handleInput(e.target.value)}
        />
        <input
          type="submit"
          value="Submit"
          className="waves-effect waves-light btn"
        />
      </form>
    );
  }
}

export default graphql(addLyricToSong)(LyricCreate);
