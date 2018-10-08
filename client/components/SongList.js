import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongs from "../queries/fetchSongs";
import gql from "graphql-tag";

class SongList extends Component {
  constructor(props) {
    super(props);
    this.renderSongs = this.renderSongs.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const {
      data: { refetch },
      mutate
    } = this.props;
    mutate({
      variables: {
        id
      }
    }).then(() => refetch());
  }

  renderSongs() {
    const {
      data: { songs }
    } = this.props;

    return (
      <ul className="collection">
        {songs.map(song => (
          <li className="collection-item" key={song.id}>
            <Link to={`songs/${song.id}`}>{song.title}</Link>
            <i
              className="material-icons"
              onClick={() => this.handleDelete(song.id)}
            >
              delete
            </i>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { loading } = this.props.data;

    if (loading) {
      return <h1> Loading... </h1>;
    }

    return (
      <div>
        <h2>Song List </h2>
        {this.renderSongs()}
        <Link to="/create"> Create A Song</Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation deleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(fetchSongs)(SongList));
