const React = require('react');

const CommentIndexItem = React.createClass({


  render: function() {
    return (
      <ul>
        <li>Body: {this.props.comment.body}</li>
        <li>ID: {this.props.comment.id}</li>
        <li>song_ID: {this.props.comment.song_id}</li>
        <li>user_ID: {this.props.comment.user_id}</li>
      </ul>
    );
  },
});

module.exports = CommentIndexItem;
