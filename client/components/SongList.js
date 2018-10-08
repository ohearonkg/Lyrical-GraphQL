import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongs from "../queries/fetchSongs";

class SongList extends Component {
  constructor(props) {
    super(props);
    this.renderSongs = this.renderSongs.bind(this);
  }
  renderSongs() {
    const { songs } = this.props.data;
    return (
      <ul className="collection">
        {songs.map(song => (
          <li className="collection-item" key={song.id}>
            {song.title}
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

export default graphql(fetchSongs)(SongList);
