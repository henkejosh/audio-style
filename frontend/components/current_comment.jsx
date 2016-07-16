const React = require('react');

const CurrentComment = React.createClass({
  render: function() {
    return (
      <div className="current-comment">
        <img src={this.props.comment.user_pic} />
        <p>{this.props.comment.body}</p>
      </div>
    );
  }
});

module.exports = CurrentComment;
