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
    CommentActions.createSongComment(this.state.song_id, comment);
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

  render: function() {
    return (
      <section>
        <form onSubmit={this.handleForm}>

          <textarea onChange={this.update("body")}
            value={this.state.body} />

          <input type="submit" value="submit" />

        </form>
      </section>
    );
  }
});

module.exports = CommentForm;
