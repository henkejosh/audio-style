const React = require('react');
const SessionStore = require('../stores/session_store.js');

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
    // TODO create a Comment from this info
    
    debugger;
  },

  handleComment: function(event) {
    event.preventDefault();
    let displayAtt;

    if(this.state.shown === "none") {
      displayAtt = "block";
    } else {
      displayAtt = "none";
    }
    this.setState({ shown: displayAtt });
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
