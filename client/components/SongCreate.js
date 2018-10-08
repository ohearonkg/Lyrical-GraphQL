import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongCreate extends React.Component {
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
      }
    });
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

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
