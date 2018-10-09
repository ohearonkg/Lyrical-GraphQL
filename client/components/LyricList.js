import React from "react";

export default ({ lyrics }) => (
  <ul className="collection">
    {lyrics.map(lyric => (
      <li key={lyric.id} className="collection-item">
        {lyric.content}
      </li>
    ))}
  </ul>
);
