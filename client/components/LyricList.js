import React, { Component } from "react";
import { graphql } from "react-apollo";
import likeLyric from "../mutations/likeLyric";

class LyricList extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(lyricId, numberLikes) {
    const { mutate } = this.props;
    mutate({
      variables: {
        lyricId
      },
      optimisticReponse: {
        __typename: "Mutation",
        likeLyric: {
          id: lyricId,
          __typename: "LyricType",
          likes: numberLikes + 1
        }
      }
    });
  }

  renderList() {
    const { lyrics } = this.props;
    return (
      <ul className="collection">
        {lyrics.map(lyric => (
          <li key={lyric.id} className="collection-item">
            {lyric.content}
            <div>
              <h4>{lyric.likes}</h4>
              <i
                onClick={() => this.handleClick(lyric.id, lyric.likes)}
                className="material-icons"
              >
                thumb_up
              </i>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return this.renderList();
  }
}

export default graphql(likeLyric)(LyricList);
