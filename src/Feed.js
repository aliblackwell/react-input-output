import React from 'react';
import './Feed.css';

const Feed = (props) => {

  const { feedData } = props; // props.feedData

  return (
    <div className="Feed">
      <h2>Welcome to the feed</h2>
      {feedData.map((feedItem, i) => (
        <div className="FeedItem" key={i}>
          <h2>{feedItem.title}</h2>
          <p>{feedItem.description}</p>
        </div>
      ))}
    </div>
  ) 
}

export default Feed;