const React = require('react');

const CurrentComment = React.createClass({
  // <div className="current-comment">
  // <img src={this.props.comment.user_pic} />
  render: function() {
    return (
        <p className="current-comment">'{this.props.comment.body}'</p>
    );
  }
});
// </div>

module.exports = CurrentComment;
