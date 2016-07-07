const React = require('react');

const CommentForm = React.createClass({
  getInitialState: function() {
    return {shown: "none"};
  },

  handleForm: function(event) {
    event.preventDefault();

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

  render: function() {
    return (
      <section>
        <button onClick={this.handleComment}>
          Comment
        </button>

        <form display={this.state.shown}
          onSubmit={this.handleForm}>
        </form>
      </section>
    );
  }
});

module.exports = CommentForm;
