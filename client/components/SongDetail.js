import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

class SongDetail extends Component {
  constructor(props) {
    super(props);
    this.renderSongDetails = this.renderSongDetails.bind(this);
  }

  renderSongDetails() {
    const {
      data: {
        song: { title }
      }
    } = this.props;
    return (
      <div className="collection-item">
        <h2> {title} </h2>
      </div>
    );
  }

  render() {
    const {
      data: { loading, songs }
    } = this.props;

    return (
      <div>
        <Link to="/"> Back </Link>
        {loading ? <h2> Loading Song Details.. </h2> : this.renderSongDetails()}
      </div>
    );
  }
}

const query = gql`
  query song($id: ID!) {
    song(id: $id) {
      title
      lyrics {
        likes
      }
    }
  }
`;

export default graphql(query, {
  options: props => {
    return {
      variables: {
        id: props.params.id
      }
    };
  }
})(SongDetail);
