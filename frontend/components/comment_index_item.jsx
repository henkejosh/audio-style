const React = require('react');


const CommentIndexItem = React.createClass({
  // <li>Occurs: {this.props.comment.time_into_song}</li>
  render: function() {
    return (
      <ul className="ComIndexItem">
        <img className={this.props.styleType}
          src={this.props.comment.user_pic}/>

      </ul>
    );
  },
});

module.exports = CommentIndexItem;
