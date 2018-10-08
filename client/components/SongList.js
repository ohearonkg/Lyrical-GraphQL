import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends React.Component {
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
    const { loading, songs } = this.props.data;

    if (loading) {
      return <h1> Loading... </h1>;
    }

    return (
      <div>
        <h2>Song List </h2>
        {this.renderSongs()}
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
