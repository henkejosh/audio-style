const React = require('react');

const CurrentComment = React.createClass({
  formatBodyContent: function() {
    if(this.props.comment === undefined) {
      return "";
    } else {
      return this.props.comment.body;
    }
  },

  render: function() {
    return (
        <p className="current-comment">{this.formatBodyContent}</p>
    );
  }
});

module.exports = CurrentComment;
