const React = require('react');
const SessionStore = require('../stores/session_store.js');
const CommentActions = require('../actions/comment_actions.js');

const CommentForm = React.createClass({
  getInitialState: function() {
    return {
      body: "",
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
      body: "",
      song_id: this.props.songID,
      user_id: SessionStore.currentUser().id
    });
  },

  update: function(property) {
    return (e) => {
      this.setState({[property]: e.target.value });
    };
  },

  // <form onSubmit={this.handleForm}>
  // </form>
  render: function() {
    return (
      <section className="comForm">

          <textarea onChange={this.update("body")}
            value={this.state.body} />

          <input onClick={this.handleForm} type="submit" value="Comment" />

      </section>
    );
  }
});

module.exports = CommentForm;
