const React = require('react');

const CurrentComment = React.createClass({
  render: function() {
    return (
        <p className="current-comment">'{this.props.comment.body}'</p>
    );
  }
});

module.exports = CurrentComment;
