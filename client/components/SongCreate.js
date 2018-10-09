import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import fetchSongs from "../queries/fetchSongs";
import addSong from "../mutations/addSong";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { mutate } = this.props;
    const { title } = this.state;
    mutate({
      variables: {
        title
      },
      refetchQueries: [{ query: fetchSongs }]
    }).then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div>
        <h2> Create A New Song</h2>
        <form onSubmit={this.handleSubmit}>
          <label> Song Title: </label>
          <input
            onChange={e => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
          <input
            type="submit"
            value="Submit"
            className="waves-effect waves-light btn"
          />
        </form>
      </div>
    );
  }
}

export default graphql(addSong)(SongCreate);
