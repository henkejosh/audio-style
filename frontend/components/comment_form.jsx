const React = require('react');
const SessionStore = require('../stores/session_store.js');
const CommentActions = require('../actions/comment_actions.js');

const CommentForm = React.createClass({
  getInitialState: function() {
    return {
      body: "Write a comment...",
      song_id: this.props.songID,
      user_id: SessionStore.currentUser().id
    };
  },

  handleForm: function(event) {
    event.preventDefault();
    const comment = Object.assign({}, this.state);
    comment.song_id = this.props.songID;
    comment.time_into_song = Math.floor(this.props.actualTime);
    CommentActions.createSongComment(this.props.song_id, comment);
    this.resetState();
  },

  resetState: function() {
    this.setState({
      body: "Write a comment...",
      song_id: this.props.songID,
      user_id: SessionStore.currentUser().id
    });
  },

  update: function(property) {
    return (e) => {
      this.setState({[property]: e.target.value });
    };
  },

  showCommentForm: function() {
    $('#commentForm').show();
  },

  hideCommentForm: function() {
    $('#commentForm').hide();
  },

  render: function() {
    // <form onSubmit={this.handleForm} className="comForm">
    //
    // <input type="textarea" onChange={this.update("body")}
    // value={this.state.body} />
    //
    // <input value="Comment" type="submit"/>
    //
    // </form>
    return (
      <section className="comForm" onMouseEnter={this.showCommentForm}
        onMouseLeave={this.hideCommentForm}>

        <textarea id="commentForm" onChange={this.update("body")}
          value={this.state.body} />

        <span onClick={this.handleForm} type="submit">Comment</span>

      </section>
    );
  }
});

module.exports = CommentForm;
