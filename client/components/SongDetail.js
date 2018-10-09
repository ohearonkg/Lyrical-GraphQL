import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import fetchSong from "../queries/fetchSong";
import LyricList from "./LyricList";

class SongDetail extends Component {
  constructor(props) {
    super(props);
    this.renderSongDetails = this.renderSongDetails.bind(this);
  }

  renderSongDetails() {
    const {
      data: {
        song: { title, lyrics }
      },
      params: { id }
    } = this.props;

    return (
      <div>
        <h2> {title} </h2>
        <LyricList lyrics={lyrics} />
        <LyricCreate songId={id} />
      </div>
    );
  }

  render() {
    const {
      data: { loading }
    } = this.props;

    return (
      <div>
        <Link to="/"> Back </Link>
        {loading ? <h2> Loading Song Details.. </h2> : this.renderSongDetails()}
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => {
    return {
      variables: {
        id: props.params.id
      }
    };
  }
})(SongDetail);
